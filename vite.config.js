import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// const CopyWebpackPlugin = require("copy-webpack-plugin");
// const path = require("path");

// 复制文件到指定目录
// const copyFiles = [
//   {
//     from: path.resolve("src/plugins/manifest.json"),
//     to: `${path.resolve("dist")}/manifest.json`,
//   },
//   {
//     from: path.resolve("src/assets"),
//     to: path.resolve("dist/assets"),
//   },
//   {
//     from: path.resolve("src/plugins/inject.js"),
//     to: path.resolve("dist/js"),
//   },
// ];

// 复制插件
// const plugins = [
//   new CopyWebpackPlugin({
//     patterns: copyFiles,
//   }),
// ];

// 页面文件
// const pages = {};
// // 配置 popup.html 页面
// const chromeName = ["popup"];

// chromeName.forEach((name) => {
//   pages[name] = {
//     entry: `src/${name}/main.js`,
//     template: `src/${name}/index.html`,
//     filename: `${name}.html`,
//   };
// });

// https://vitejs.dev/config/
export default defineConfig({
  // 引入第三方插件
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve("./src"),
      "/images": "src/assets/images/", // 这里不能通过path模块解析路径的写法
    },
  },
  //   publicDir: "src/assets",
  server: {
    host: "0.0.0.0",
    open: true, //vite项目启动时自动打开浏览器
    strictPort: 8080, //vite项目启动时自定义端口
    hmr: true, //开启热更新
  },
  build: {
    // 处理打包以后的资源，所以需要配置build选项
    assetsDir: "assets",
    sourcemap: false, // 产生source map文件
    write: true, // 如果需要在vite生成文件之前做些处理，请将此选项设置为false，然后处理完后手动调用vite的write函数
    lib: {
      entry: [
        resolve(__dirname, "src/background_scripts/background.js"),
        resolve(__dirname, "src/content_scripts/content.js"),
      ],
      fileName: (_, entryName) => {
        return `${entryName}.js`;
      },
    },
    rollupOptions: {
      input: {
        config: resolve(__dirname, "src/config/index.html"),
        popup: resolve(__dirname, "src/popup/index.html"),
        override: resolve(__dirname, "src/override/index.html"),
      },
      output: {
        // chunkFileNames: "assets/js/[name]-[hash].js",
        // entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          console.log(">>>>>>>>>>");
          console.log(assetInfo);
          console.log("<<<<<<<<<<");
          return assetInfo.name;
        },
      },
    },
    // pages,
    // productionSourceMap: false,
    // 配置 content.js background.js
    // configureWebpack: {
    //   entry: {
    //     background: "./src/background/main.js",
    //   },
    //   output: {
    //     filename: "js/[name].js",
    //   },
    //   plugins,
    // },
    // 配置 content.css
    // css: {
    //   extract: {
    //     filename: "css/[name].css",
    //   },
    // },
  },
});
