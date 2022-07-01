import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import naive from 'naive-ui'
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'




createApp(App).use(store).use(router).mount('#app')
const app = createApp(App)
app.use(naive)
app.mount("#app")
