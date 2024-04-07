import fs from "fs";
import path from "path";

// const copyFolder = (srcDir, destDir) => {
//   if (!fs.existsSync(destDir)) {
//     fs.mkdirSync(destDir);
//   }

//   fs.readdirSync(srcDir).forEach((file) => {
//     const srcPath = path.join(srcDir, file);
//     const destPath = path.join(destDir, file);

//     if (fs.lstatSync(srcPath).isDirectory()) {
//       copyFolder(srcPath, destPath);
//     } else {
//       fs.copyFileSync(srcPath, destPath);
//     }
//   });
// };

// 递归创建三个目录
let chrome_dirs = ["popup", "override", "config"];
for (let i = 0; i < chrome_dirs.length; i++) {
  let dir = path.resolve(process.cwd(), "dist/" + chrome_dirs[i]);
  fs.mkdirSync(dir, { recursive: true });
}

// 调整文件结构
let vite_paths = {
  "dist/src/popup/index.html": "dist/popup/index.html",
  "dist/popup.js": "dist/popup/popup.js",
  "dist/src/config/index.html": "dist/config/index.html",
  "dist/config.js": "dist/config/config.js",
  "dist/src/override/index.html": "dist/override/index.html",
  "dist/override.js": "dist/override/override.js",
};

for (let k in vite_paths) {
  let old_path = path.resolve(process.cwd(), k);
  let new_path = path.resolve(process.cwd(), vite_paths[k]);
  fs.renameSync(old_path, new_path);
}

// 删除src目录
let vite_src_dir = path.resolve(process.cwd(), "dist/src");
fs.rmdirSync(vite_src_dir, { recursive: true });

// 拷贝文件到dist目录
let copy_dirs = ["_locales", "assets", "background_scripts", "content_scripts", "manifest.json"];
for (let i = 0; i < copy_dirs.length; i++) {
  let src = path.resolve(process.cwd(), "src/" + copy_dirs[i]);
  let dest = path.resolve(process.cwd(), "dist/" + copy_dirs[i]);
  fs.cpSync(src, dest, { recursive: true });
}