import Vue from "vue";
import Vuex from 'vuex';

//使用插件一次
Vue.use(Vuex);
//引入小仓库
import home from "./home";
import search from "./search";
import details from "./details"
import shopCart from "./shopCart";
import user from "./user";
import trade from "./trade";

//对外暴露Store类的一个实例
export default new Vuex.Store({
    //模块化
    modules:{
        home,
        search,
        details,
        shopCart,
        user,
        trade,
    }
})