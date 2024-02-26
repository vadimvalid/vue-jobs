import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './index.css'
import router from '@/router'
import App from './App.vue'

const app = createApp(App)

library.add(faSearch)
app.use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
