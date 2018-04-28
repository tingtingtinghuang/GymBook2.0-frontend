import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path:'/reserve',
      name:'reserve',
      component: Reservepage
    },
    {
      path:'/introduction',
      name:'introduction',
      component: Introductionpage
    }
  ]
