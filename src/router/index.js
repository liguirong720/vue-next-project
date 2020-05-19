import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/todoList/:from?',
    name: 'TodoList',
    component: () => import(/* webpackChunkName: "todoList" */ '../views/TodoList.vue')
  },
  {
    path: '/vue2.x',
    name: 'Vue2x',
    component: () => import(/* webpackChunkName: "Vue2x" */ '../views/Vue2x.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
