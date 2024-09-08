import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Booking from '@/views/Booking.vue'
import Register from '@/views/Register.vue'
import List from '@/views/List.vue'
import Payment from '@/views/Payment.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/booking',
      name: 'booking',
      component: Booking
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/list',
      name: 'list',
      component: List,
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment,
    },
  ]
})

export default router
