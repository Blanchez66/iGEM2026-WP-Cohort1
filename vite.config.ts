import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import { stringToSlug } from "./src/utils/stringToSlug";

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const basePath = env.VITE_BASE_PATH || `/${stringToSlug(env.VITE_TEAM_NAME || "igem-starter")}/`;

  return defineConfig({
    base: basePath,
    plugins: [react()],
    build: {
      rollupOptions: {
        input: {
          main: fileURLToPath(new URL("./index.html", import.meta.url)),
          notFound: fileURLToPath(new URL("./404.html", import.meta.url)),
        },
      },
    },
  });
};
