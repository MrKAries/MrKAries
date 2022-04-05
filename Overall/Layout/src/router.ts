import { createRouter, createWebHistory, RouterOptions } from 'vue-router'

const routes: RouterOptions['routes'] = [
  {
    path: '/',
    name: 'home',
    component: () => import('./pages/Home.vue'),
  },
  {
    path: '/note/:page*', // vue-router@4.x path的写法
    name: 'note',
    component: () => import('./pages/Note.vue'),
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
