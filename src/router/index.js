import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register/Register.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
