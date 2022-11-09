<template>
  <div>
    地图
    <baidu-map
      class="map"
      :center="{lng: 116.404, lat: 39.915}"
      :zoom="11"
      :scroll-wheel-zoom="true"
    >
      <bm-driving
        :start="start"
        :end="end"
        @searchcomplete="handleSearchComplete"
        :panel="false"
        @stop="reset"
        :autoViewport="true"
      ></bm-driving>
      <bml-lushu
        :path="path"
        :icon="icon"
        :play="play"
        :rotation="true"
      >
      </bml-lushu>
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
    </baidu-map>
    <input
      ref="start"
      placeholder="请输入起点"
      value="上海大学地铁站"
    />
    <input
      ref="end"
      placeholder="请输入终点"
      value="人民广场"
    />
    <button
      type="button"
      @click="confirm"
    >确认</button>

  </div>
</template>

<script>
import {BmlLushu} from 'vue-baidu-map'
export default {
  name: "Map",
  components:{
    BmlLushu
  },
  data() {
    return {
      play: false,
				path: [],
				icon: {
					url: 'http://api.map.baidu.com/library/LuShu/1.2/examples/car.png',
					size: {
						width: 52,
						height: 26
					},
					opts: {
						anchor: {
							width: 27,
							height: 13
						}
					}
				},
				start: '天安门',
				end: '百度大厦',
    };
  },

  mounted() {},

  methods: {
    reset () {
			      this.play = false
			    },
			handleSearchComplete(res) {
				this.path = res.getPlan(0).getRoute(0).getPath()
			},
			confirm() {
				this.start = this.$refs.start.value
				this.end = this.$refs.end.value
				this.play = true
			}

  },
};
</script>

<style lang="less" scoped>
  .map{
    height: 750px;
    width: 100%;
  }
</style>