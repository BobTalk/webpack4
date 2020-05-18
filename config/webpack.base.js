const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const MiniCssExtractPlugin =  require("mini-css-extract-plugin")
module.exports={
    entry:{
        app: './src/main.js'
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
                use: {
                    loader: 'html-withimg-loader',
                    options: {}
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
                // exclude: file => (/node_modules/.test(file) && !/\.vue\.js/.test(file))
            },
            // {
            //     test: /\.jsx$/,
            //     loader: 'babel-loader'
            // },            
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 10240,
                            name: 'static/imgs/[name].[ext]', // 输出文件名称
                            esModule: false
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 10240,
                            name: 'static/fonts/[name].[ext]',
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