const merge = require('webpack-merge')
const base = require('./webpack.base.js')
const path =  require('path')
const TerserPlugin = require('terser-webpack-plugin') // 压缩js
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin') //压缩css
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 打包前删除dist目录
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = merge(base, {
    devtool: 'production',
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'productionPage',
            template: path.resolve(__dirname, '../public/index.html'),
            inject: true,//将js文件注入到body底部
            favicon: "",
            minify: {
				minifyJS: true, //压缩html内的js
				minimize: true,//打包为最小值
				removeAttributeQuotes: true,//去引号
				removeComments: true,//去注释
				collapseWhitespace: true,//去空格
				removeEmptyElements: true//去空元素
			}
        }),
        new OptimizeCSSAssetsPlugin ({
            // 默认是全部的CSS都压缩，该字段可以指定某些要处理的文件
            assetNameRegExp: /\.(sa|sc|c)ss$/g, 
            // 指定一个优化css的处理器，默认cssnano
            // cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
              preset: [ 'default', {
                  discardComments: { removeAll: true}, //对注释的处理
                  normalizeUnicode: false // 建议false,否则在使用unicode-range的时候会产生乱码
              }]
            },
            canPrint: false  // 是否打印编译过程中的日志
          })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
                parallel: true,  // 开启多进程，提升压缩速度
                cache: true,
                sourceMap: false  // 生成map文件
            })
        ],
        splitChunks: {
            chunks: 'all',
            minSize: 30000, //超过多少大小就进行压缩 30kb
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                'element-ui': {
                    name: 'element-ui',
                    test: /[\\/]node_modules[\\/]element-ui[\\/]/,
                    priority: 10  // 优先级要大于 vendors 不然会被打包进 vendors
                  },
                  commons: {
                    name: 'commons',
                    minSize: 30, //表示在压缩前的最小模块大小,默认值是 30kb
                    minChunks: 2, // 最小公用次数
                    priority: 5, // 优先级
                    reuseExistingChunk: true // 公共模块必开启
                  },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    // name: 'static/js/vendors',
                    // chunks: 'initial'
                    priority: -10   // 优先级配置项
                },
                default: {
                    minChunks: 2,
                    priority: -20,   // 优先级配置项
                    reuseExistingChunk: true
                }
            }
        }
    }
})