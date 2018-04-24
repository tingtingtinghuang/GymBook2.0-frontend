import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

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
        }
    ]
})
export default router;

