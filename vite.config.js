import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  esbuild: {
    target: "es2022", // 혹은 'chrome90', 'firefox90' 등 최신 브라우저로 변경
  },
});
