const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const MiniCssExtractPlugin =  require("mini-css-extract-plugin")
const env = require(path.resolve(__dirname, '../.env'))
// const PurifyCSS = require('purifycss-webpack')
// const glob = require('glob-all')

module.exports={
    entry:{
        app: path.resolve(__dirname, '../src/main.js')
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            "@": path.resolve(__dirname, "../src"),
            "static": path.resolve(__dirname, "../static")
        }
    },
    // externals: {
    //     'vue': 'vue',
    //     'vue-router': 'router',
    //     'axios': 'axios'
    // },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "static/style/[name].[chunkhash:8].css",
     　　    chunkFilename: "static/style/[id].css"
        }),
        new webpack.DefinePlugin({
            'process.env': env
          })
        // 清除无用css
        // new PurifyCSS({
        //     paths: glob.sync([
        //       // 要做 CSS Tree Shaking 的路径文件
        //       path.resolve(__dirname, '../public/*.html'),
        //       path.resolve(__dirname, '../src/*.js')
        //     ])
        //   })
        //配置全局的第三方插件库
        // new webpack.ProvidePlugin({})
    ],
    output: {
        filename: 'static/js/[name].[hash:8].js',
        chunkFilename: "static/js/[name].bundle.js",
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(html|htm)$/i,
                use: ['html-withimg-loader']
            },
            {
                test: /\.vue$/,
                exclude: '/node_modules/',
                use: ['vue-loader'],
            },
            {
                test: /\.ejs/,
                use: ['ejs-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    }
                    // {
                    //     loader: 'eslint-loader', // 使用 eslint-loader
                    //     options: {
                    //        fix: false // 设置 fix 为 true，它会帮你自动修复一些错误，不能自动修复的，还是需要你自己手动修复
                    //     }
                    // }
                ]
                // exclude: file => (/node_modules/.test(file) && !/\.vue\.js/.test(file))
            },
            // {
            //     test: /\.jsx$/,
            //     loader: 'babel-loader'
            // },  
            {
                test: /\.(vue|js)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
                enforce: 'pre'
            },          
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 10240, // 10k
                            name: '[name].[ext]', // 输出文件名称
                            outputPath: 'static/imgs/'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 10240,
                            name: '[name].[ext]',
                            outputPath: 'static/fonts/',
                            esModule: false
                        }
                    }
                ]
            },
            {
                test: /\.css$/i,
                // use: [
                //     process.env.NODE_ENV !== 'prod' ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                //     'css-loader'
                // ]
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: path.resolve(__dirname,'../postcss.config.js')
                            }
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    // process.env.NODE_ENV !== 'prod' ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                    // 'css-loader',
                    // 'less-loader'
                    MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: path.resolve(__dirname,'../postcss.config.js')
                            }
                        }
                    }, 
                    'less-loader'
                ]
            },
            {
                test: /\.(styl|stylus)$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: path.resolve(__dirname,'../postcss.config.js')
                            }
                        }
                    }, 
                    'stylus-loader'
                ]
            }
        ]
    }
}