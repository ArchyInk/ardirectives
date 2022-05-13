import { createApp } from 'vue'
import App from './App.vue'
import { download } from '../src'


const app = createApp(App)
app.directive('download', download)
app.mount('#app')