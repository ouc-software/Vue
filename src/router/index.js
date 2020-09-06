import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Album from '@/components/Album'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path:'/Register',
      name:'Register',
      component:Register
    },
    {
      path:'/Album',
      name:'Album',
      component:Album
    }
  ]

})
