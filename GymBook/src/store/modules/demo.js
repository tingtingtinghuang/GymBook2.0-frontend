import * as types from '../mutation-types';

const state = {
  gymDetail: {
    "id": 1,
    "title": "",
    "description": "",
    "html": "",
    "addr": "",
    "rank": null,
    "time_type": null,
    "status": null,
    "logo": null,
    "price": "",
    "limit_num": null,
    "buy_limit_num": null,
    "open_time": null,
    "limit_time": null,
    "ref_type": 1,
    "ref_area": 1,
    "ref_sport": 1,
  },
  userLike: {
    "userId":1,
    "like":[5,6,7,8]
  }
};

const getters = {
  getUserLike (state) {
    return state.userLike
  }
}

const mutations = {
  [types.GYM_DETAIL](state, data) {
    state.gymDetail = data;
  },
  [types.GET_USERLIKE](state, data) {
    state.userLike = data;
  },
  [types.CHANGE_USERLIKE](state,data) {
    state.userLike.like = data
  }
}

export default {
  state,
  getters,
  mutations
}