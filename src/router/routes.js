//引入路由组件
import Home from '@/pages/Home'
import Record from '@/pages/Record'
import User from '@/pages/User'

//引入二级路由

export default[
    {
        path:"/home",
        component:Home
    },
    {
        path:"/record",
        name:'Record',
        component:Record
    },
    {
        path:'/user',
        name:'User',
        component:User
    },

    //重定向，在项目跑起来的时候直接定位到首页
    {
        path:'*',
        redirect:'/home'
    }
]