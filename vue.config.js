module.exports = {
    lintOnSave: false,
    //代理跨域
    devServer: {
     
        proxy: {
            //在寻找api以前的改成target
            'api': {
                target: 'http://gmall-h5-api.atguigu.cn',
                // pathRewrite:{'^/api':-''-},
            }
        }
    }
}
