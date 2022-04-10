<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveIndex">
        <h2 class="all" @mousemove="showSort">全部商品分类</h2>
        <transition name="sort">
          <div class="sort" v-show="show">
            <div class="all-sort-list2" @click="goSearch">
              <!-- :class绑定动态类，当条件满足才加上类 -->
              <div
                class="item"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
                :class="{ cur: currentIndex == index }"
              >
                <h3 @mouseenter="changeIndex(index)">
                  <!-- 给每个a标签绑定自定义属性data -->
                  <a
                    :data-categoryName="c1.categoryName"
                    :data-category1Id="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                </h3>
                <div
                  class="item-list clearfix"
                  :style="{ display: currentIndex == index ? 'block' : 'none' }"
                >
                  <div
                    class="subitem"
                    v-for="(c2, index) in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a
                          :data-categoryName="c2.categoryName"
                          :data-category2Id="c2.categoryId"
                          >{{ c2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em
                          v-for="(c3, index) in c2.categoryChild"
                          :key="c3.categoryId"
                        >
                          <a
                            :data-categoryName="c3.categoryName"
                            :data-category3Id="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
//引入仓库
import { mapState } from "vuex";
//引入lodash
// import _ from 'lodash';
//按需引入lodash
import throttle from "lodash/throttle";
export default {
  name: "TypeNav",

  data() {
    return {
      currentIndex: -1,
      show: true,
    };
  },

  mounted() {
    //如果挂载完毕，是search路由，则隐藏sort
    if (this.$route.path != "/home") {
      this.show = false;
    }
  },
  computed: {
    ...mapState({
      //sate中为大仓库中的satate数据
      categoryList: (state) => {
        return state.home.categoryList;
      },
    }),
  },

  methods: {
    // changeIndex(index) {
    //   this.currentIndex = index;
    // },
    //加入节流函数
    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 50),
    leaveIndex() {
      this.currentIndex = -1;
      if (this.$route.path != "/home") {
        this.show = false;
      }
    },
    goSearch(event) {
      //使用事件委派+编程式导航
      //如何确定点击的是a标签，如何拿到a标签中携带的name和id属性传递参数给路径？？
      let element = event.target;
      //target中dataset属性是元素中所有属性的对象，从中解构出所需要的参数
      let { categoryname, category1id, category2id, category3id } =
        element.dataset;
      //则如果标签中包含name属性，说明找到了a标签
      if (categoryname) {
        let location = { name: "search" };
        let query = { categoryName: categoryname };
        //判断是一级还是二级三级，依次向query中传递参数
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else {
          query.category3Id = category3id;
        }
        //整合所有参数完成跳转
        if (this.$route.params) {
          location.query = query;
          location.params = this.$route.params;
          this.$router.push(location);
        }
      }
    },
    showSort() {
      if (this.$route.path != "/home") {
        this.show = true;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }
        .cur {
          background: skyblue;
        }
      }
    }
    .sort-enter {
      height: 0px;
      background: transparent;
    }
    .sort-to {
      height: 461px;
      background: #fafafa;
    }
    .sort-enter-active {
      transition: all 0.2s linear;
    }
  }
}
</style>