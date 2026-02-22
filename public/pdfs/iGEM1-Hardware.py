import machine      # 控制引脚 (GPIO)
import camera       # 控制摄像头采样
import time         # 控制延迟
from machine import I2C, Pin
import ssd1306      # OLED 显示屏驱动

# ==========================================
# 1. 硬件引脚定义 (严格对应 PCB 原理图)
# ==========================================
led_g = machine.Pin(12, machine.Pin.OUT)                    # 绿灯：待机与成功  (IO12)
led_y = machine.Pin(4,  machine.Pin.OUT)                    # 黄灯：处理中      (IO4)
led_r = machine.Pin(2,  machine.Pin.OUT)                    # 红灯：异常故障    (IO2)
btn   = machine.Pin(13, machine.Pin.IN, machine.Pin.PULL_UP) # 插入开关         (IO13)

# ==========================================
# 2. OLED 显示屏初始化 (SSD1306, 128×64, I2C)
#    IO14 → SCL, IO15 → SDA (对应原理图)
# ==========================================
i2c  = I2C(0, scl=Pin(14), sda=Pin(15), freq=400000)
oled = ssd1306.SSD1306_I2C(128, 64, i2c)

def oled_show(line1, line2=None, line3=None):
    """清屏后显示最多三行文字，行间距 22px"""
    oled.fill(0)
    oled.text(line1, 0,  0)
    if line2: oled.text(line2, 0, 22)
    if line3: oled.text(line3, 0, 44)
    oled.show()

# ==========================================
# 3. 图像采样与灰度分析算法
# ==========================================
IMG_WIDTH = 320   # QVGA 图像宽度 (像素)
THRESHOLD = 0.5   # 阈值：T/C 比值 >= 0.5 判为阴性

def run_algorithm():
    """
    拍照并计算 T/C 灰度比值。
    返回保留 3 位小数的比值；以下情况返回 None：
      - 拍照失败
      - 像素区域越界（分辨率不足）
      - C 线区域全黑（除零保护）
    """
    img = camera.capture()  # 执行拍照采样
    if not img:
        return None

    # --- 坐标标定区 ---
    # 这里的坐标需要在实测时根据试剂条位置微调
    t_zone = img[100 * IMG_WIDTH : 110 * IMG_WIDTH]  # T 线像素区域 (行 100~109)
    c_zone = img[150 * IMG_WIDTH : 160 * IMG_WIDTH]  # C 线像素区域 (行 150~159)

    # 边界检查：防止切片为空（图像分辨率不足时会触发）
    if not t_zone or not c_zone:
        return None

    # 计算灰度均值
    avg_t = sum(t_zone) / len(t_zone)
    avg_c = sum(c_zone) / len(c_zone)

    # 除零保护：C 线全黑时无法计算比值
    if avg_c < 1e-6:
        return None

    return round(avg_t / avg_c, 3)

# ==========================================
# 4. 主程序：状态机逻辑
# ==========================================
# 初始化摄像头驱动 (灰度模式, QVGA 320×240)
camera.init(0, format=camera.GRAYSCALE, framesize=camera.FRAME_QVGA)

oled_show("iGEM Reader", "Insert strip...")

while True:
    # --- 状态 1：待机 (绿色常亮) ---
    led_g.value(1)  # 绿灯亮：系统就绪
    led_y.value(0)
    led_r.value(0)
    oled_show("iGEM Reader", "Insert strip...")

    if btn.value() == 0:  # 检测试剂条插入 (IO13 低电平触发)

        # --- 状态 2：处理中 (黄色常亮) ---
        led_g.value(0)
        led_y.value(1)  # 黄灯亮：正在拍照与分析
        led_r.value(0)
        oled_show("Analyzing...", "Please wait")

        print("Test strip detected, analyzing image...")
        time.sleep(1)  # 等待试剂条稳定

        result = run_algorithm()  # 执行采样与分析

        # --- 状态 3：判断结果 ---
        if result is not None:
            print("Analysis completed, T/C ratio:", result)
            ratio_str = "T/C: {:.3f}".format(result)

            if result >= THRESHOLD:
                print("Result: NEGATIVE (Colonization)")  # 阴性/正常
                oled_show("NEGATIVE", ratio_str, "Colonization")
            else:
                print("Result: INFECTED (Positive)")      # 阳性/感染
                oled_show("POSITIVE", ratio_str, "Infected")

            # 绿灯闪烁 3 秒 (0.2s 亮 + 0.3s 灭，共 6 次)
            led_y.value(0)
            for _ in range(6):
                led_g.value(1); time.sleep(0.2)
                led_g.value(0); time.sleep(0.3)

        else:
            # --- 结果异常 (红色常亮 4 秒) ---
            print("Error: Unable to fetch image")
            oled_show("ERROR", "Image capture", "failed")
            led_y.value(0)
            led_r.value(1)  # 红灯亮：指示异常
            time.sleep(4)   # 保持红色警示 4 秒
            led_r.value(0)

        # 等待试剂条取出，防止重复触发（原版缺失此逻辑）
        while btn.value() == 0:
            time.sleep(0.01)

    time.sleep(0.1)  # 每 0.1 秒扫描一次开关
