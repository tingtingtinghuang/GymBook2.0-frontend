import * as types from '../mutation-types';
import API from '../../utils/api';

const actions = {
  //获取getGym列表
  getGym: ({ commit }, params) => {
    return API.getGymAPI(params).then(res => {
      commit(types.GYM_DETAIL, res.data);
    }, err => {
      if (err) {
        commit(types.GYM_DETAIL, {});
      }
    })
  }
}

export default actions