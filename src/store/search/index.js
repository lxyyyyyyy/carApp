//search模块中的小仓库
import {reqGetSearchInfo} from "@/api"
const state = {
    searchList:{},
};
const mutations = {
    SEARCHLIST(state,searchList){
        state.searchList = searchList;
    }
};
const actions = {
    async getSearchList({commit},searchInfo={}){
        let result = await reqGetSearchInfo(searchInfo);
        if(result.code == 200){
            
            commit("SEARCHLIST",result.data)
        }
    }
};
const getters = {
    goodsList(state){
        return state.searchList.goodsList||[];
    },
    attrsList(state){
        return state.searchList.attrsList||[];
    },
    trademarkList(state){
        return state.searchList.trademarkList||[];
    }
};
//对外暴露
export default {
    state,
    mutations,
    actions,
    getters
}