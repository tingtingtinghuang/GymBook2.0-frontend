
import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/public/login.vue';

Vue.use(Router);

import  filterBox from '../components/public/filterBox.vue';

const navigation=resolve=>{
    require.ensure(['../components/public/navigation.vue'],()=>{
      resolve(require('../components/public/navigation.vue'));
    })
  }

const router= new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'navigation',
            component:navigation
        },
        {
            path:'/filterBox',component:filterBox
        },
         {
            path: '/login',
            name: 'login',
            component: login
         }

    ]
})
export default router;

