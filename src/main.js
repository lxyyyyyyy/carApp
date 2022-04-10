import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

//引入路由
import router from './router'
//引入vuex仓库store
import store from '@/store';
// 引入全局组件
import TypeNav from '@/components/TypeNav'
import Pagination from '@/components/Pagination'
//引入swiper样式
import "swiper/css/swiper.css";
import VueLazyLoad from "vue-lazyload"
import atm from "@/assets/1.gif"
//注册组件:参数一：全局组件的名，参数二：哪一个组件
Vue.component(TypeNav.name,TypeNav);
Vue.component(Pagination.name,Pagination);
Vue.use(ElementUI, { locale })

Vue.use(VueLazyLoad,{
  loading:atm
})

//测试
import {reqCategoryList} from '@/api'

//引入所有的api为一个对象
import *as API from '@/api'
//引入mock
import '@/mock/mockServe'
reqCategoryList();

// Vue.config.productionTip = false


//使用自定义插件，先引入
import myPlun from './plun/myPlun'
//use
Vue.use(myPlun,{
  name:'upper'
})//之后回到组件中使用v-upper绑定自定义事件

new Vue({
  render: h => h(App),
  //配置全局事件总线,this就是这个vm实例
  beforeCreate(){
    Vue.prototype.$bus = this;
    //在所有组件挂在前放入$API
    Vue.prototype.$API = API;
  },

  //注册路由组件,这里写router的时候，组件身上都有$route,$router属性
  router,
  //注册vuex仓库store，注册完毕以后，组件身上都会有$store属性
  store,
}).$mount('#app')
