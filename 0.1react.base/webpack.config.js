const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlwebpackplugin = new HtmlWebpackPlugin({
    template:path.join(__dirname , './src/index.html'),
    filename:'index.html'
})
module.exports = {
    mode:'development',
    plugins:[
        htmlwebpackplugin
    ]

    // 在webpack中 有一个很大的特性 就是约定大于配置 默认的打包入口文件是src下的index.js
}