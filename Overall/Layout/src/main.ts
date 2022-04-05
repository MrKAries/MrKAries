import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'

// qinakun
import { registerMicroApps } from 'qiankun'

registerMicroApps([
  {
    name: 'karies-note',
    entry: '//localhost:7521',
    container: '#qiankunContainer',
    activeRule: '/note',
  },
])

createApp(App).use(Router).mount('#karies')
