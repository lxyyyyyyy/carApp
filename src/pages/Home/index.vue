<template>
  <div class="home">
    首页
    <Map></Map>
  </div>
</template>
<script>
import Map from '@/components/map'
export default {
  name: "Home",
  components: {
    Map
  },

  data() {
    return {
    };
  },

  mounted() {},
  computed: {},

  methods: {},
};
</script>

<style lang="less" scoped>
.home{
  padding-bottom: .5rem;
}
</style>