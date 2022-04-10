module.exports = {
    lintOnSave: false,
    //代理跨域
    devServer: {
     
        proxy: {
            //在寻找api以前的改成target
            'api': {
                target: 'http://39.98.123.211',
                // pathRewrite:{'^/api':-''-},
            }
        }
    }
}
