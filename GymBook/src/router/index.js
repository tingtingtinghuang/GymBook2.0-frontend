import Vue from "vue";
import Router from "vue-router";
import login from '../components/login.vue';
import Demo from '../components/Demo.vue';


import BookingHall from '../components/bookingHall.vue';





// const BookingHall=resolve=>{
//     require.ensure(['../components/bookingHall.vue'],()=>{
//       resolve(require('../components/bookingHall.vue'));
//     })
// };

import SouthBadminton from '../components/SouthCampus/badminton'
import SouthTennis from '../components/SouthCampus/tennis'
import SouthBasketball from '../components/SouthCampus/basketball'
import SouthPingpong from '../components/SouthCampus/pingpong'
import SouthSwimmingPool from '../components/SouthCampus/swimmingpool'
import Fitness from '../components/SouthCampus/fitness'
import ManageRule from '../components/manageRule'
import BookCenter from '../components/bookCenter'


Vue.use(Router);


const router = new Router({
    mode: "history",
    scrollBehavior(to,from,savedPosition){
        if(to.hash){

            return {
                selector: to.hash
            }
        }
    },
    routes: [
        {
            path: "/",
            name:'bookingHall',
            component:BookingHall
        },
        {
            path:'/south/badminton',
            component:SouthBadminton
        },
        {
            path:'/south/tennis',
            component:SouthTennis
        },
        {
            path:'/south/basketball',
            component:SouthBasketball
        },
        {
            path:'/south/pingpong',
            component:SouthPingpong
        },
        {
            path:'/south/swimmingpool',
            component:SouthSwimmingPool
        },
        {
            path:'/south/fitness',
            component:Fitness
        },
        {
            path:'/bookcenter',
            component:BookCenter
        },

        { path: '/login', component: login },
        { path: '/demo', component: Demo },

        {
            path:'/manageRule',
            component:ManageRule
        }

    ]
});
export default router;

