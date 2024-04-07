# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

## 目录结构文件说明

```js
--- redfish
    |
    --- src                    // vue3+vite项目源代码
    |   |
    |   --- _locales           // chrome插件语言国际化
    |   |
    |   --- assets             // 存放chrome插件图标的地方
    |   |
    |   --- background_scripts // chrome插件后台长时间运行的脚本目录
    |   |   |
    |   |   --- background_script.js
    |   |
    |   --- content_scripts    // chrome插件页面运行的脚本目录
    |   |   |
    |   |   --- conent_script.js
    |   |
    |   --- config        // chrome插件配置页面
    |   |   |
    |   |   --- components
    |   |   |
    |   |   --- App.vue
    |   |   |
    |   |   --- main.js
    |   |
    |   --- override      // chrome插件重写页面
    |   |   |
    |   |   --- components
    |   |   |
    |   |   --- App.vue
    |   |   |
    |   |   --- main.js
    |   |
    |   --- popup         // chrome插件浏览器右上
    |   |   |
    |   |   --- components
    |   |   |
    |   |   --- App.vue
    |   |   |
    |   |   --- main.js
    |   |
    |   --- manifest.json // chrome插件配置文件
    |
    --- config.html       // chrome插件配置页面入口文件
    |
    --- override.html     // chrome插件override页面入口文件
    |
    --- popup.html        // chrome插件popup弹窗页面入口文件
    |
    --- vite.config.js    // vite编译配置文件入口
    |
    --- package.json      // npm项目依赖文件
    |
    --- build.js          // 编译拷贝文件
    |
    --- dist              // vue3+vite项目编译后的文件夹，此文件夹里面的所有文件最终将打包成chrome扩展
```
