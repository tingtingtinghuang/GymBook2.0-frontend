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
  },
  getUserLike:({ commit },params)=>{
  //从后端获取用户关注信息
  },
  changeUserLike:({ commit },data)=>{
  //修改用户的关注信息
    commit(types.CHANGE_USERLIKE,data);
  }
}

export default actions