import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve("./src"),
      "/images": "src/assets/images/", // 这里不能通过path模块解析路径的写法
    },
  },
  server: {
    host: "0.0.0.0",
    open: true, //vite项目启动时自动打开浏览器
    strictPort: 8081, //vite项目启动时自定义端口
    hmr: true, //开启热更新
  },
  build: {
    lib: {
      entry: [
        resolve(__dirname, "src/background/background.ts"),
        resolve(__dirname, "src/content_scripts/content_scripts.ts"),
      ],
      fileName: (_, entryName) => {
        return `${entryName}.js`;
      },
    },
    outDir: "dist/js",
  },
});
