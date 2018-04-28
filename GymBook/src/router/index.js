
import Vue from 'vue'
import Router from 'vue-router'

import  filterBox from '../components/public/filterBox.vue';
import navigation from '../components/public/navigation.vue';
import login from '../components/public/login.vue';
import Demo from '../components/public/Demo.vue';


Vue.use(Router);

// const navigation=resolve=>{
//     require.ensure(['../components/public/navigation.vue'],()=>{
//       resolve(require('../components/public/navigation.vue'));
//     })
//   }

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
        { path: '/login', component: login },
        { path: '/demo', component: Demo }
    ]
})
export default router;

