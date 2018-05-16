import * as types from '../mutation-types';

const state = {
    gymList:{
    }
};

const mutations = {
  [types.GYM_LIST](state, data) {
      console.log(data);
    state.gymList = data;
  }
}

export default {
  state,
  mutations
}