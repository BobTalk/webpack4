const merge = require('webpack-merge')
const base = require('./webpack.base.js')
const webpack = require('webpack')
const path =  require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 打包前删除dist目录
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(base, {
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        contentBase: path.resolve(__dirname,'../dist'),
        compress: false, // 是否开启服务器gzip压缩
        port: 8080,
        inline: true // 设置为 true，当源文件改变时会自动刷新页面.
        // host: 'localhost'
        // proxy: {
        //     "/api": {
        //       target: "http://localhost:3000",
        //       pathRewrite: {"^/api": ""} // 将/api重写为""空字符串
        //     } 
        // }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            title:'development',
            filename: 'index.html',
            template: path.resolve(__dirname, '../public/index.html'),
            favicon: "",
            hash: true
        }),
        new webpack.NamedChunksPlugin(), // 查看更改的文件
        new webpack.HotModuleReplacementPlugin()
    ]
})