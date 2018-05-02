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
import PingPangRoomDetails from "../components/showMoreDetailsByOrder/PingPangRoomDetails.vue";
import SwimmingRoomDetails from "../components/showMoreDetailsByOrder/SwimmingRoomDetails.vue";
import GymRoomDetails from "../components/showMoreDetailsByOrder/GymRoomDetails.vue";
import BasketballRoomDetails from "../components/showMoreDetailsByOrder/BasketballRoomDetails.vue";
import TennisRoomDetails from "../components/showMoreDetailsByOrder/TennisRoomDetails.vue";
import BadmintonRoomDetails from "../components/showMoreDetailsByOrder/BadmintonRoomDetails.vue";
import BadmintonRoom from '../components/public/SouthCampus/badminton'

const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "navigation",
            component: navigation
        },
        {
            path:'/south/badminton',
            component:BadmintonRoom
        },
        {
            path:'/filterBox',component:filterBox
        },
        { path: '/login', component: login },
        { path: '/demo', component: Demo },
        {
            path: "/showMoreDetailsByOrder/PingPangRoom",
            name: "PingPangRoomDetails",
            component: PingPangRoomDetails
        },
        {
            path: "/showMoreDetailsByOrder/SwimmingRoom",
            name: "SwimmingRoomDetails",
            component: SwimmingRoomDetails
        },
        {
            path: "/showMoreDetailsByOrder/GymRoom",
            name: "GymRoomDetails",
            component: GymRoomDetails
        },
        {
            path: "/showMoreDetailsByOrder/BasketballRoom",
            name: "BasketballRoomDetails",
            component: BasketballRoomDetails
        },
        {
            path: "/showMoreDetailsByOrder/TennisRoom",
            name: "TennisRoomDetails",
            component: TennisRoomDetails
        },
        {
            path: "/showMoreDetailsByOrder/BadmintonRoom",
            name: "BadmintonRoomDetails",
            component: BadmintonRoomDetails
        }
    ]
});
export default router;

