import Vue from 'vue'
import VueRouter from 'vue-router'
import ChatWrapper from '../views/chatWrap.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ChatWrapper',
    component: ChatWrapper
  }
]

const router = new VueRouter({
  routes
})

export default router
