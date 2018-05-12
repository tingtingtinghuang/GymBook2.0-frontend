import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import modules from "./modules";
Vue.use(Vuex);

export default new Vuex.Store({
    actions: actions,
    modules: modules,
    strict: false
})