const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

//创建一个插件的实力对象
const htmlPlugin = new HtmlWebPackPlugin({
    template:path.join(__dirname,'./src/index.html'),//源文件
    filename:'index.html' //生成再内存中首页的名字
})

module.exports = {
    mode: 'development',//development(开发环境),production(生产环境,压缩)
    plugins:[
        htmlPlugin
    ],
    module:{
        rules:[
            {test:/\.js|jsx$/,use:'babel-loader',exclude:/node_modules/},
        ]
    }
}