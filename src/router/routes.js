//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Details from '@/pages/Details'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'

//引入二级路由
import MyOrder from '@/pages/Center/MyOrder'
import GroupOrder from '@/pages/Center/GroupOrder'
export default[
    {
        path:"/home",
        component:Home,
        meta:{show:true},
    },
    {
        path:"/search/:keyword?",
        component:Search,
        meta:{show:true},
        name:'search',

    },
    {
        path:"/trade",
        component:Trade,
        meta:{show:true},
        name:'trade',
        // beforeEnter: (to, from, next) => {
        //     if(from.path=='/shopCart'){
        //         next();
        //     }else{
        //         next('/shopCart')
        //     }
        // }

    },
    {
        path:"/center",
        component:Center,
        meta:{show:true},
        name:'center',
        children:[
            {
                path:"myOrder",
                component:MyOrder,

            },
            {
                path:"groupOrder",
                component:GroupOrder,
            },
            //重定向
            {
                path:"/center",
                redirect:"/center/myOrder"
            }
        ]

    },
    {
        path:"/paySuccess",
        component:PaySuccess,
        meta:{show:true},
        name:'paySuccess',
        // beforeEnter: (to, from, next) => {
        //     if(from.path=='/pay'){
        //         next();
        //     }else{
        //         next(false)
        //     }
        // }

    },
    {
        path:"/pay",
        component:Pay,
        meta:{show:true},
        name:'pay',

    },
    {
        path:"/addCartSuccess",
        component:AddCartSuccess,
        meta:{show:true},
        name:'addCartSuccess',

    },
    {
        path:"/shopCart",
        component:ShopCart,
        meta:{show:true},
        name:'shopCart',

    },
    {
        path:"/register",
        component:Register,
        meta:{show:false},

    },
    {
        path:'/login',
        component:Login,
        meta:{show:false},

    },
    {
        path:'/details/:skuid',
        component:Details,
        meta:{show:true},

    },
    //重定向，在项目跑起来的时候直接定位到首页
    {
        path:'*',
        redirect:'/home'
    }
]