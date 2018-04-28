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
import BaseketballRoomDetails from "../components/showMoreDetailsByOrder/BaseketballRoomDetails.vue";
import TennisRoomDetails from "../components/showMoreDetailsByOrder/TennisRoomDetails.vue";
import BadmintonRoomDetails from "../components/showMoreDetailsByOrder/BadmintonRoomDetails.vue";

const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "navigation",
            component: navigation
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
            path: "/showMoreDetailsByOrder/BaseketballRoom",
            name: "BaseketballRoomDetails",
            component: BaseketballRoomDetails
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

