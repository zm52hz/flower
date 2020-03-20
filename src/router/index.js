import Vue from 'vue'
import Router from 'vue-router'
import foot from '@/components/foot'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name:'home',component:require('../components/home.vue')},
    { path: '/proDetail', name:'home',component:require('../components/proDetail/proDetail.vue')},
    { path: '/category', name:'category',component:require('../components/category.vue')},
    { path: '/cart', name:'cart',component:require('../components/Cart/cart.vue')},
    { path: '/my', name:'my',component:require('../components/my.vue')},
    { path: '/fillOrder', name:'fillOrder',component:require('../components/Order/fillOrder.vue')},
  ]
})
