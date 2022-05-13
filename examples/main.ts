import { createApp } from 'vue'
import App from './App.vue'
import { download, DownloadOptions } from '../src'


const app = createApp(App)
app.directive('download', download)
app.mount('#app')