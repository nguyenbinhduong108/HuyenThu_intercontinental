import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)


app.use(createPinia())
app.use(router)

const html = document.querySelector('html')
html?.classList.add("home");
html?.classList.add("desktop");

app.mount('#app')
