import Vue from "vue";
import Router from "vue-router";
import login from '../components/login.vue';
import register from '../components/register.vue';
import Demo from '../components/Demo.vue';


// const BookingHall=resolve=>{
//     require.ensure(['../components/bookingHall.vue'],()=>{
//       resolve(require('../components/bookingHall.vue'));
//     })
// };


import BookingHall from '../components/bookingHall'
import ManageRule from '../components/manageRule'
import BookCenter from '../components/bookCenter'
import test from '../components/reservePage'

Vue.use(Router);


const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name:'bookingHall',
            component:BookingHall
        },
        {
            path:'/bookcenter',
            component:BookCenter
        },

        { path: '/login', component: login },
        { path: '/register', component: register },
        { path: '/demo', component: Demo },
        {
            path:'/manageRule',
            component:ManageRule
        },
        {path:'/reserve/:id',component:test}


    ]
});
export default router;

