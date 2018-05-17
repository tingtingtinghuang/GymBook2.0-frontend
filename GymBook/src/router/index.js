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
import SouthFitness from '../components/SouthCampus/fitness'
import SouthFootball from '../components/SouthCampus/football'

import ManageRule from '../components/manageRule'
import BookCenter from '../components/bookCenter'

import EastPingpong from '../components/EastCampus/pingpong'
import EastSwimming from '../components/EastCampus/swimming'
import EastFitness from '../components/EastCampus/fitness'
import EastBadminton from '../components/EastCampus/badminton'
import EastTennis from '../components/EastCampus/tennis'

import NorthPingpong from '../components/NorthCampus/pingpong'

import ZhuhaiSwimming from '../components/ZhuhaiCampus/swimming'




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
            component:SouthFitness
        },
        {
          path:'/south/football',
          component:SouthFootball
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
        },
        {path:'/east/badminton',component:EastBadminton},
        {path:'/east/fitness',component:EastFitness},
        {path:'/east/pingpong',component:EastPingpong},
        {path:'/east/swimming',component:EastSwimming},
        {path:'/east/tennis',component:EastTennis},
        {path:'/north/pingpong',component:NorthPingpong},
        {path:'/zhuhai/swimming',component:ZhuhaiSwimming}

    ]
});
export default router;

