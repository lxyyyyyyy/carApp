import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import './vantui'


//引入地图
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: 'GgVQ5QmCkMLgHuiVGxCeeT1oaue3W23k'
})
//引入路由
import router from './router'
//引入vuex仓库store
import store from '@/store';
// 引入全局组件

//引入swiper样式
import "swiper/css/swiper.css";
import VueLazyLoad from "vue-lazyload"
//注册组件:参数一：全局组件的名，参数二：哪一个组件



//测试

//引入所有的api为一个对象
import *as API from '@/api'
//引入mock
import '@/mock/mockServe'
import * as echarts from 'echarts'
import axios from 'axios'
// Vue.config.productionTip = false

//使用自定义插件，先引入
//use


new Vue({
  render: h => h(App),
  //配置全局事件总线,this就是这个vm实例
  beforeCreate() {
    Vue.prototype.$bus = this;
    //在所有组件挂在前放入$API
    Vue.prototype.$API = API;
    Vue.prototype.$echarts = echarts;
    Vue.prototype.$axios = axios;
  },

  //注册路由组件,这里写router的时候，组件身上都有$route,$router属性
  router,
  //注册vuex仓库store，注册完毕以后，组件身上都会有$store属性
  store,
}).$mount('#app')
