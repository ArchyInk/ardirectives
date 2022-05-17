/*
 * @author: Archy
 * @Date: 2022-05-13 09:40:22
 * @LastEditors: Archy
 * @LastEditTime: 2022-05-17 14:43:16
 * @FilePath: \ardirectives\examples\main.ts
 * @description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import { download, loading } from '../src'


const app = createApp(App)
app.directive('download', download)
app.directive('loading', loading)
app.mount('#app')