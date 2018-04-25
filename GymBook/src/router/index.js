import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const navigation = resolve => {
    require.ensure(["../components/public/navigation.vue"], () => {
        resolve(require("../components/public/navigation.vue"));
    });
};
const PingPangRoomDetails = require('../components/showMoreDetailsByOrder/PingPangRoomDetails.vue')
const SwimmingRoomDetails = require('../components/showMoreDetailsByOrder/SwimmingRoomDetails.vue')
const GymRoomDetails = require('../components/showMoreDetailsByOrder/GymRoomDetails.vue')
const BaseketballRoomDetails = require("../components/showMoreDetailsByOrder/BaseketballRoomDetails.vue");
const TennisRoomDetails = require("../components/showMoreDetailsByOrder/TennisRoomDetails.vue");
const BadmintonRoomDetails = require('../components/showMoreDetailsByOrder/BadmintonRoomDetails.vue')

const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "navigation",
            component: navigation
        },
        {
            path: "/showMoreDetailsByOrder",
            children: [
                {
                    path: "PingPangRoom",
                    component: PingPangRoomDetails
                },
                {
                    path: "SwimmingRoom",
                    component: SwimmingRoomDetails
                },
                {
                    path: "GymRoom",
                    component: GymRoomDetails
                },
                {
                    path: "BaseketballRoom",
                    component: BaseketballRoomDetails
                },
                {
                    path: "TennisRoom",
                    component: TennisRoomDetails
                },
                {
                    path: "BadmintonRoom",
                    component: BadmintonRoomDetails
                }
            ]
        }
    ]
});
export default router;

