import Vue from "vue";
import Router from "vue-router";
import login from '../components/public/login.vue';
import Demo from '../components/public/Demo.vue';
import filterBox from '../components/public/filterBox.vue';

Vue.use(Router);


const navigation = resolve => {
    require.ensure(["../components/public/navigation.vue"], () => {
        resolve(require("../components/public/navigation.vue"));
    });
};
const BookingHall=resolve=>{
    require.ensure(['../components/public/bookingHall.vue'],()=>{
      resolve(require('../components/public/bookingHall.vue'));
    })
};

import SouthBadminton from '../components/public/SouthCampus/badminton'
import SouthTennis from '../components/public/SouthCampus/tennis'
import SouthBasketball from '../components/public/SouthCampus/basketball'
import SouthPingpong from '../components/public/SouthCampus/pingpong'
import SouthSwimmingPool from '../components/public/SouthCampus/swimmingpool'
import Fitness from '../components/public/SouthCampus/fitness'

const router = new Router({
    mode: "history",
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
            path:'/filterBox',component:filterBox
        },
        { path: '/login', component: login },
        { path: '/demo', component: Demo }
      

    ]
});
export default router;

