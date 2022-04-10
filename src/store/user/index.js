import { reqGetCode, reqLogout, reqUserInfo, reqUserLogin, reqUserRegister } from "@/api";
import{getToken,setToken,removeToken} from "@/utils/token"
const state = {
    code: '',
    token:getToken(),
    userInfo:{},
};
const mutations = {
    CODE(state, code) {
        state.code = code
    },
    TOKEN(state,token){
        state.token = token;
    },
    USERINFO(state,userInfo){
        state.userInfo = userInfo;
    },
    CLEAR(state){
        state.token = '';
        state.userInfo = '';
        removeToken()
    }
};
const actions = {
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone);
        if (result.code == 200) {
            commit('CODE', result.data);
        } else {
            return Promise.reject(new Error('fail'));
        }
    },
    async getUserRegister({ commit }, user) {
        let result = await reqUserRegister(user);
        if(result.code == 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('fail'));
        }
    },
    async getUserLogin({commit},user){
        let result = await reqUserLogin(user);
        //获取到result.data中返回的token令牌
        if(result.code == 200){
            commit("TOKEN",result.data.token);
        }else{
            return Promise.reject(new Error('fail'));
        }
    },
    async getUserInfo({commit}){
        let result = await reqUserInfo();
        if(result.code == 200){
            commit("USERINFO",result.data);
        }else{
            return Promise.reject(new Error('fail'))
        }
    },
    async logout({commit}){
        let result = await reqLogout();
        if(result.code == 200){
            commit("CLEAR")
            return 'ok'
        }else{
            return Promise.reject(new Error('fail'))
        }
    }

};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}