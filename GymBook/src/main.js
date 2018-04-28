import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store';

Vue.use(ElementUI);

Vue.config.productionTip = false;

// console.log(router);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
