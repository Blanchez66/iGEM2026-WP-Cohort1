#include <Arduino.h>
#include "esp_camera.h"
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

// ==========================================
// 1. 硬件引脚定义 (严格对应 PCB 原理图)
// ==========================================
// LED 与按键
constexpr int PIN_LED_Y = 4;   // 黄灯：处理中       (IO4)
constexpr int PIN_LED_R = 2;   // 红灯：异常故障     (IO2)
constexpr int PIN_LED_G = 12;  // 绿灯：待机与成功   (IO12)
constexpr int PIN_BTN   = 13;  // 插入开关 (接GND，低电平触发) (IO13)

// I2C OLED 引脚 (原理图中 OLED 接 IO14/IO15)
constexpr int PIN_SCL = 14;    // IO14 → OLED SCL
constexpr int PIN_SDA = 15;    // IO15 → OLED SDA

// ==========================================
// 2. AI-Thinker ESP32-CAM 摄像头引脚配置
//    (原理图模块型号为 AI-Thinker ESP32-CAM，
//     摄像头引脚为模块内部固定连接，无需外接)
// ==========================================
#define PWDN_GPIO_NUM     32
#define RESET_GPIO_NUM    -1   // 无复位引脚
#define XCLK_GPIO_NUM      0
#define SIOD_GPIO_NUM     26   // 摄像头 I2C SDA (内部)
#define SIOC_GPIO_NUM     27   // 摄像头 I2C SCL (内部)
#define Y9_GPIO_NUM       35
#define Y8_GPIO_NUM       34
#define Y7_GPIO_NUM       39
#define Y6_GPIO_NUM       36
#define Y5_GPIO_NUM       21
#define Y4_GPIO_NUM       19
#define Y3_GPIO_NUM       18
#define Y2_GPIO_NUM        5
#define VSYNC_GPIO_NUM    25
#define HREF_GPIO_NUM     23
#define PCLK_GPIO_NUM     22

// ==========================================
// 3. OLED 显示屏配置 (SSD1306, 128×64, I2C)
// ==========================================
#define OLED_WIDTH  128
#define OLED_HEIGHT  64
#define OLED_ADDR  0x3C    // SSD1306 标准 I2C 地址

Adafruit_SSD1306 display(OLED_WIDTH, OLED_HEIGHT, &Wire, -1);

// ==========================================
// 4. 图像采样与灰度分析算法
// ==========================================
constexpr float THRESHOLD = 0.5f;  // 判定阈值
constexpr int   IMG_WIDTH = 320;   // QVGA 宽度 (像素)

// 返回 T/C 比值 (保留 3 位小数)；失败返回 -1.0f
float run_algorithm() {
    camera_fb_t *fb = esp_camera_fb_get();
    if (!fb) return -1.0f;

    const uint8_t *img = fb->buf;
    const size_t   len = fb->len;

    // 截取 T 线像素区域 (行 100~109)
    const int t_start = 100 * IMG_WIDTH;
    const int t_end   = 110 * IMG_WIDTH;
    // 截取 C 线像素区域 (行 150~159)
    const int c_start = 150 * IMG_WIDTH;
    const int c_end   = 160 * IMG_WIDTH;

    // 边界检查：防止越界访问
    if (static_cast<size_t>(c_end) > len) {
        esp_camera_fb_return(fb);
        return -1.0f;
    }

    // 计算 T 区灰度均值
    long sum_t = 0;
    for (int i = t_start; i < t_end; i++) sum_t += img[i];
    const float avg_t = static_cast<float>(sum_t) / (t_end - t_start);

    // 计算 C 区灰度均值
    long sum_c = 0;
    for (int i = c_start; i < c_end; i++) sum_c += img[i];
    const float avg_c = static_cast<float>(sum_c) / (c_end - c_start);

    esp_camera_fb_return(fb);  // 归还帧缓冲区，避免内存泄漏

    // 防止 C 线全黑时除零
    if (avg_c < 1e-6f) return -1.0f;

    return roundf((avg_t / avg_c) * 1000.0f) / 1000.0f;
}

// ==========================================
// 5. OLED 显示辅助函数
//    最多显示三行，行间距 20px
// ==========================================
void oled_show(const char *line1,
               const char *line2 = nullptr,
               const char *line3 = nullptr) {
    display.clearDisplay();
    display.setTextSize(1);
    display.setTextColor(SSD1306_WHITE);
    display.setCursor(0,  0); display.println(line1);
    if (line2) { display.setCursor(0, 22); display.println(line2); }
    if (line3) { display.setCursor(0, 44); display.println(line3); }
    display.display();
}

// ==========================================
// 6. 初始化 (setup)
// ==========================================
void setup() {
    Serial.begin(115200);

    // 初始化 LED 与按键引脚
    pinMode(PIN_LED_G, OUTPUT);
    pinMode(PIN_LED_Y, OUTPUT);
    pinMode(PIN_LED_R, OUTPUT);
    pinMode(PIN_BTN,   INPUT_PULLUP);  // 对应原理图开关接 GND

    // 初始化 I2C 总线，指定 SCL=IO14, SDA=IO15
    Wire.begin(PIN_SDA, PIN_SCL);
    if (!display.begin(SSD1306_SWITCHCAPVCC, OLED_ADDR)) {
        Serial.println("[WARN] OLED init failed, continuing without display");
    } else {
        oled_show("iGEM Reader", "Initializing...");
    }

    // 初始化摄像头 (AI-Thinker ESP32-CAM 标准引脚)
    camera_config_t cfg = {};
    cfg.ledc_channel = LEDC_CHANNEL_0;
    cfg.ledc_timer   = LEDC_TIMER_0;
    cfg.pin_d0       = Y2_GPIO_NUM;
    cfg.pin_d1       = Y3_GPIO_NUM;
    cfg.pin_d2       = Y4_GPIO_NUM;
    cfg.pin_d3       = Y5_GPIO_NUM;
    cfg.pin_d4       = Y6_GPIO_NUM;
    cfg.pin_d5       = Y7_GPIO_NUM;
    cfg.pin_d6       = Y8_GPIO_NUM;
    cfg.pin_d7       = Y9_GPIO_NUM;
    cfg.pin_xclk     = XCLK_GPIO_NUM;
    cfg.pin_pclk     = PCLK_GPIO_NUM;
    cfg.pin_vsync    = VSYNC_GPIO_NUM;
    cfg.pin_href     = HREF_GPIO_NUM;
    cfg.pin_sccb_sda = SIOD_GPIO_NUM;
    cfg.pin_sccb_scl = SIOC_GPIO_NUM;
    cfg.pin_pwdn     = PWDN_GPIO_NUM;
    cfg.pin_reset    = RESET_GPIO_NUM;
    cfg.xclk_freq_hz = 20000000;       // 20 MHz
    cfg.pixel_format = PIXFORMAT_GRAYSCALE;
    cfg.frame_size   = FRAMESIZE_QVGA; // 320×240，与 IMG_WIDTH=320 一致
    cfg.fb_count     = 1;

    esp_err_t err = esp_camera_init(&cfg);
    if (err != ESP_OK) {
        Serial.printf("[ERR] Camera init failed: 0x%x\n", err);
        oled_show("CAMERA ERROR", "Check module");
        // 硬件致命错误：红灯常亮，停止运行
        digitalWrite(PIN_LED_R, HIGH);
        while (true) delay(1000);
    }

    Serial.println("[OK] System ready");
    oled_show("iGEM Reader", "Insert strip...");
}

// ==========================================
// 7. 主循环：状态机
// ==========================================
void loop() {
    // --- 状态 1：待机 (绿色常亮) ---
    digitalWrite(PIN_LED_G, HIGH);
    digitalWrite(PIN_LED_Y, LOW);
    digitalWrite(PIN_LED_R, LOW);
    oled_show("iGEM Reader", "Insert strip...");

    if (digitalRead(PIN_BTN) == LOW) {  // 检测到试剂条插入

        // --- 状态 2：处理中 (黄色常亮) ---
        digitalWrite(PIN_LED_G, LOW);
        digitalWrite(PIN_LED_Y, HIGH);
        Serial.println("Test strip detected, analyzing image...");
        oled_show("Analyzing...", "Please wait");
        delay(1000);  // 等待试剂条稳定

        const float result = run_algorithm();

        // --- 状态 3：判断结果 ---
        if (result >= 0.0f) {
            char ratio_str[20];
            snprintf(ratio_str, sizeof(ratio_str), "T/C: %.3f", result);
            Serial.print("Analysis completed, T/C ratio: ");
            Serial.println(result, 3);

            if (result >= THRESHOLD) {
                Serial.println("Result: NEGATIVE (Colonization)");
                oled_show("NEGATIVE", ratio_str, "Colonization");
            } else {
                Serial.println("Result: INFECTED (Positive)");
                oled_show("POSITIVE", ratio_str, "Infected");
            }

            // 绿灯闪烁 3 秒：6 × (200ms 亮 + 300ms 灭)
            digitalWrite(PIN_LED_Y, LOW);
            for (int i = 0; i < 6; i++) {
                digitalWrite(PIN_LED_G, HIGH); delay(200);
                digitalWrite(PIN_LED_G, LOW);  delay(300);
            }
        } else {
            // --- 异常：红灯常亮 4 秒 ---
            Serial.println("Error: Unable to fetch image");
            oled_show("ERROR", "Image capture", "failed");
            digitalWrite(PIN_LED_Y, LOW);
            digitalWrite(PIN_LED_R, HIGH);
            delay(4000);
            digitalWrite(PIN_LED_R, LOW);
        }

        // 等待试剂条取出，防止重复触发
        while (digitalRead(PIN_BTN) == LOW) {
            delay(10);
        }
    }

    delay(100);  // 每 0.1 秒扫描一次按键
}
