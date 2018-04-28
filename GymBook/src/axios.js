import axios from 'axios'
import store from './store'
import router from './router'
import { request } from 'https';

axios.defaults.timeout=20000;

const axios_instance =axios.create();

// axios_instance.interceptors.request.use(
//     config => {
//         //每次发送请求之前检测都vuex存有token,那么都要放在请求头发送给服务器
//         if(store.state.token){
//             // console.log(store.state.token);
//             config.headers.Authorization = `token ${store.state.token}`;
//         }
//         return config;
//     },
//     err => {
//         return Promise.reject(err);
//     }
// );
// // response拦截器
// axios_instance.interceptors.response.use(
//     response=>{
//         console.log(response);
//         return response;
        
//     },
//     err=>{
//         console.log(err.response);
//         if(err.response)
//         {
//             switch(err.response.status)
//             {
//                 case 401:
//                     // 清除token
//                     // store.commit('UserLogout');
//                     //跳转到登录页面
//                      // 带查询参数，变成 /signin?redirect=router.currentRoute.fullPath
//                     router.replace({
//                         path:'/signin',
//                         query:{redirect :router.currentRoute.fullPath}
//                     });
//             }
//         }
//         return Promise.reject(err.response);
//     }
// );

export default{
    userSignin(data)
    {
        return axios_instance.post("http:\/\/localhost:8081/students/oauth",data);
    },
    userSignUp(data)
    {
        return axios_instance.post("http:\/\/localhost:8081/students/signup",data);
    },
    GetOppointment(data)
    {
        return axios_instance.get("http:\/\/localhost:8081/oppointment",{params: data});
    },
    GetInventory()
    {
        return axios_instance.get("http:\/\/localhost:8081/stuinventory");
    },
    GetGym()
    {
        return axios_instance.get("http:\/\/localhost:8081/gym");
    },
    GetManagerInventory()
    {
        return axios_instance.get("http:\/\/localhost:8081/managerinventory");
    },
    GetBalance(data)
    {
        return axios_instance.get("http:\/\/localhost:8081/balance",{params: data});
    },
    InsertOrder(data)
    {    
        return axios_instance.post("http:\/\/localhost:8081/order", data);
    },
    changePassword(data)
    {      
        return axios_instance.put("http:\/\/localhost:8081/password", data);
    },
    openGym(data)
    {
        return axios_instance.put("http:\/\/localhost:8081/gym/open", data);
    },
    closeGym(data)
    {
        return axios_instance.put("http:\/\/localhost:8081/gym/close", data);
    },
    GetNotice()
    {
        return axios_instance.get("http:\/\/localhost:8081/notice");
    },
    deleteNotice(data)
    {
        return axios_instance.delete("http:\/\/localhost:8081/notice",{params: data});
    },
    insertNotice(data)
    {   
       
        return axios_instance.post("http:\/\/localhost:8081/notice", data);
    },
    southTennis(data)
    {
        
        return axios_instance.get("http:\/\/localhost:8081/south_tennis",{params: data});
    },
    eastTennis(data)
    {
        return axios_instance.get("http:\/\/localhost:8081/east_tennis",{params: data});
    },
    southBadminton(data)
    {
        
        return axios_instance.get("http:\/\/localhost:8081/south_badminton",{params: data});
    },
    eastBadminton(data)
    {
        
        return axios_instance.get("http:\/\/localhost:8081/east_badminton",{params: data});
    },
    deposit(data)
    {
        return axios_instance.put("http:\/\/localhost:8081/deposit",data);
    }
}