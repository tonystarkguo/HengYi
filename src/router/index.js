import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Product from '@/components/Product'
Vue.use(Router)

export default new Router({
//  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:"/Product",
      name:"Product",
      component: Product
    },
    {
      path: "*",
      name: "Home",
      component: Home
    },
  ]
})
