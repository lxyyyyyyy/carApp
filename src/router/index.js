//配置路由
//引入vue 和vue-router
import store from '@/store';
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes'

//使用插件
Vue.use(VueRouter);


//重写push方法：首先保存一份原来的push方法，在传入了两个回调之后的情况下使用原来的push方法
let originalPush = VueRouter.prototype.push;
let originalReplace = VueRouter.prototype.replace;
//其次改写push方法,传递三个参数，路径、resolve、reject
VueRouter.prototype.push = function (location, resolve, reject) {
    //如果存在resolve和reject回调，则使用原来的方法
    if (resolve && reject) {
        originalPush.call(this, location, resolve, reject);
    } else {
        //如果没有两个回调，手动添加两个回调以免出错
        originalPush.call(this, location, () => { }, () => { });
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originalReplace.call(this, location, resolve, reject);
    } else {
        originalReplace.call(this, location, () => { }, () => { })
    }
}

//配置路由，设置路由守卫
let router = new VueRouter({
    routes,
    //控制路由跳转的滚动行为
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 }//代表滚动条在最上方
    }
})

//设置全局守卫
router.beforeEach(async (to, from, next) => {
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;
    if (token) {
        if (to.path == '/login' || to.path == '/register') {
            next('/');

        } else {
            if (name) {
                next();
            } else {
                try {
                    await store.dispatch('getUserInfo');
                    next();

                } catch (error) {
                    await store.dispatch('logout');
                    next('/login')
                }
            }
        }
    } else {
        next()
        //未登录：不能去交易相关、不能去支付相关【pay|paysuccess】、不能去个人中心
        //未登录去上面这些路由-----登录
        let toPath = to.path;
        if (toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1) {
            //把未登录的时候向去而没有去成的信息，存储于地址栏中【路由】
            next('/login?redirect=' + toPath);
        } else {
            //去的不是上面这些路由（home|search|shopCart）---放行
            next();
        }
    }
})
export default router