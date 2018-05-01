import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const navigation=resolve=>{
    require.ensure(['../view/bookingHall.vue'],()=>{
      resolve(require('../view/bookingHall.vue'));
    })
  };

const router= new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'bookingHall',
            component:navigation
        }
    ]
})
export default router;

