<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item to="/home" icon="location-o">用车</van-tabbar-item>
      <van-tabbar-item to="/record" icon="records">记录</van-tabbar-item>
      <van-tabbar-item to="/user" icon="friends-o">我的</van-tabbar-item>
      <!-- <van-tabbar-item icon="setting-o">标签</van-tabbar-item> -->
    </van-tabbar>
  </div>

</template>

<script>
export default {
  name: "AppIndex",

  data() {
    return {
        active:0
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>