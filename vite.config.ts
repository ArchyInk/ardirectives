/*
 * @author: Archy
 * @Date: 2022-05-13 09:40:22
 * @LastEditors: Archy
 * @LastEditTime: 2022-05-17 16:53:23
 * @FilePath: \ardirectives\vite.config.ts
 * @description: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import libCss from 'vite-plugin-libcss'
import vueJsx from "@vitejs/plugin-vue-jsx";

const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(),libCss()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ardirectives',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
