//home模块中的小仓库
//引入发请求用到的api
import { reqCategoryList, reqGetBannerList,reqFloorList } from "@/api";
const state = {
    //起始状态的空数据
    categoryList:[],
    bannerList:[],
    floorList:[],
};
const mutations = {
    //传入state和接收的数据result.data
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList;
    },
    BANNERLIST(state,bannerList){
        state.bannerList = bannerList;
    },
    FLOORLIST(state,floorList){
        state.floorList = floorList;
    }
};
const actions = {
    //通过api里面的接口函数调用向服务器发送请求
    async categoryList({commit}){
        //actions返回结果是promise，需要使用await接收
        //数据只能在mutations中修改，因此传入commit进行解构
        let result = await reqCategoryList();
        if(result.code == 200){
            //向mutations中提交数据
            commit("CATEGORYLIST",result.data)
        }
    },
    async getBannerList({commit}){
        let result = await reqGetBannerList();
        if(result.code == 200){
            commit("BANNERLIST",result.data);
        }
    },
    async floorList({commit}){
        let result = await reqFloorList();
        if(result.code == 200){
            commit ("FLOORLIST",result.data);
        }
    },
};
const getters = {};
//对外暴露
export default {
    state,
    mutations,
    actions,
    getters
}