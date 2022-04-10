<template>
  <div>
    <type-nav></type-nav>
    <list-container></list-container>
    <recommend></recommend>
    <rank></rank>
    <like></like>
    <floor v-for="(floor,index) in floorList" :key="floor.id" :list = "floor"></floor>
    <brand></brand>
  </div>
</template>

<script>
import ListContainer from "./ListContainer";
import Recommend from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },

  data() {
    return {};
  },

  mounted() {
    this.$store.dispatch("floorList");
    //发送请求，校验token
    // this.$store.dispatch('getUserInfo');
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
  },

  methods: {},
};
</script>

<style lang="less" scoped>
</style>