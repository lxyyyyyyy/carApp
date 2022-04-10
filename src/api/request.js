//对axios进行二次封装
import axios from "axios";
//引入进度条和样式
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import store from "@/store";

//利用axios对象的方法create，创建一个axios实例
//requests就是axios，不过稍微做了以下配置
const requests = axios.create({
    //配置对象
    //基础路径，发送请求的时候，路径中会出现api
    baseURL:"/api",
    //请求超时的时间限制5s
    timeout:5000,
});
//请求拦截器
requests.interceptors.request.use((config)=>{

    //如果store中包含了uuid，那么在请求头中携带一个字段(和后台商量好的)
    if(store.state.details.uuid_token){
        config.headers.userTempId = store.state.details.uuid_token;
    }
    //如果store中包含有token，则在请求时携带在请求头中带给服务器
    if(store.state.user.token){
        config.headers.token = store.state.user.token;
    }

    //开始进度条
    nProgress.start();
    //config,配置对象，里面的header属性很重要
    return config;
})
//响应拦截器
requests.interceptors.response.use((res)=>{
    //结束
    nProgress.done();
    //响应成功的回调函数
    return res.data;
},(error)=>{
    //响应失败的回调函数
    return Promise.reject(new Error('false'));
})

//向外暴露
export default requests;