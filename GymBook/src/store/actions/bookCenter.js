import * as types from '../mutation-types';
import API from '../../utils/api';

const actions = {
   
    getGymList: ({ commit }, params) => {
      return API.getGymListAPI(params).then(res => {
        
        commit(types.GYM_LIST, res.data.data.gymList);
      }, err => {
        if (err) {
          commit(types.GYM_LIST, {});
        }
      })
    }
  }
  
  export default actions