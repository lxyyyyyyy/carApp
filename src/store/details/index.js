import { reqAddOrUpdateShopCart, reqGoodsInfo } from "@/api";
//封装游客身份模块uuid，生成一个随机的字符串，且不能再变
import {getUUID} from '@/utils/uuid_token'
const state = {
    goodsInfo: {},
    //游客的临时身份
    uuid_token:getUUID(),

};
const mutations = { 
    GOODSINFO(state, goodsInfo) {
        state.goodsInfo = goodsInfo;
    },

};
const actions = {
    async goodsInfo({ commit }, skuid) {
        let result = await reqGoodsInfo(skuid);
        if (result.code == 200) {
            commit("GOODSINFO", result.data);
        }
    },
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        let result = await reqAddOrUpdateShopCart(skuId,skuNum);
        if(result.code == 200){
            return "ok"
        }else{
            return Promise.reject(new Error("fail"))
        }
    }
};
const getters = {
    categoryView(){
        return state.goodsInfo.categoryView||{};
    },
    skuInfo(){
        return state.goodsInfo.skuInfo||{};
    },
    spuSaleAttrList(){
        return state.goodsInfo.spuSaleAttrList||[];
    }

};
//对外暴露
export default {
    state,
    mutations,
    actions,
    getters
}