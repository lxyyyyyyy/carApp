<template>
  <div id="app">
    <router-view></router-view>
    <AppTabbar></AppTabbar>
  </div>
</template>

<script>
//  import AppTabbar from '@/components/AppTabbar'
import AppTabbar from './components/AppTabbar/index.vue'
export default {
  name: 'App',
  components: {
    AppTabbar
},
  mounted() {
    //当一加载页面就拿到仓库中的数据
   
    
  },
}
</script>

<style lang="less">
#app{
  // font-family: Avenir,Arial, Helvetica, sans-serif;
  // -webkit-font-smoothing:antia
  background-color: #efefef;
  height: 100%;
}
html,body{
  height: 100%;
}
html{
  //一个rem
}
</style>
