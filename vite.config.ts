import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { stringToSlug } from "./src/utils";

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const basePath = env.VITE_BASE_PATH || `/${stringToSlug(env.VITE_TEAM_NAME || "igem-starter")}/`;

  return defineConfig({
    base: basePath,
    plugins: [react()],
  });
};
