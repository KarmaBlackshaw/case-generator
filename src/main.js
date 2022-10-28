import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// styles
import '@/assets/scss/app/_@index.scss'

// composables
import { createHead } from '@vueuse/head'

createApp(App)
  .use(store)
  .use(router)
  .use(createHead())
  .mount('#app')
