import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from "@/api";

const state = {
    cartList: [],
};
const mutations = {
    CARTLIST(state, cartList) {
        state.cartList = cartList;
    }
};
const actions = {
    async getCartList({ commit }) {
        let result = await reqCartList();
        if (result.code == 200) {
            commit("CARTLIST", result.data);
        }
    },
    async deleteCartById({ commit }, skuId) {
        let result = await reqDeleteCartById(skuId);
        if (result.code == 200) {
            return 'ok';
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    async updateCheckedById({ commit }, { skuId, isChecked }) {
        let result = await reqUpdateCheckedById(skuId, isChecked);
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    deleteCheckedAll({ dispatch, getters }) {
        let promiseAll = [];
        getters.cartInfoList.cartInfoList.forEach((item) => {
            //发送完请求返回一个promise对象
            let promise = item.isChecked == 1 ? dispatch('deleteCartById', item.skuId) : '';
            //promise.all(接受一个数组)
            promiseAll.push(promise);

        })
        //返回请求结果带给页面
        return Promise.all(promiseAll);
    },
    checkedAll({ dispatch, getters }, isChecked) {
        let promiseAll = [];
        getters.cartInfoList.cartInfoList.forEach(item => {
           let promise =  dispatch('updateCheckedById',{skuId:item.skuId,isChecked})
            promiseAll.push(promise);

        })
        return Promise.all(promiseAll);


    }
};
const getters = {
    cartInfoList() {
        return state.cartList[0] || {};
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}