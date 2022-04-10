// 自定义一个插件
//首先插件是一个对象
let myPlun = {};
//其次插件一定包含一个方法install，在main.js进入插件-使用插件的时候会被调用
myPlun.install = function(Vue,options){
    Vue.directive(options.name,(element,params)=>{
        element.innerHTML = params.value.toUpperCase();
        console.log(element.innerHTML)


    })
}
//对外暴露一个插件
export default myPlun;