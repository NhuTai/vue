import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TaiTest from '../components/TaiTest'
import insertUser from '../components/insertUser'
import insertBike from '../components/insertBike'
import insertBranch from '../components/insertBranch'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/tai',
      name: 'TaiTest',
      component: TaiTest
    },
    {
      path: '/insertUser',
      name: 'insertUser',
      component: insertUser
    },
    {
      path: '/insertBike',
      name: 'insertBike',
      component: insertBike
    },
    {
      path: '/insertBranch',
      name: 'insertBranch',
      component: insertBranch
    }
  ]
})
