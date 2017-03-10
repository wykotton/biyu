var path = require('path');
var webpack = require('webpack');
var dev = './static'
var proxy = [{
    path: "/api/*",
    target: "http://139.196.209.6",
    changeOrigin: true,
},
{
    path: "/imgs/*",
    target: "http://139.196.209.6:3000/",
    changeOrigin: true,
}]
module.exports = {
    entry: [
        './src/main.js',
    ],
    output: {
        path: dev,
        publicPath: '/static',
        filename: 'build.js'
    },
    module: { //模块加载
        loaders: [{
            test: /\.vue$/, //正则匹配
            loader: 'vue'
        }, {
            test: /\.js$/,
            // excluding some local linked packages.
            // for normal use cases only node_modules is needed.
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.(ttf|eot|svg|woff(2))(\?[a-z0-9]+)?$/,
            loader: 'file-loader'
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000&minetype=application/font-woff'
        }, {
            test: /\.png$/,
            loader: "file-loader?name=/src/source/images/[name].[ext]"
        }]
    },

    devtool: 'cheap-module-eval-source-map',
    //devtool:false,
    // devtool:eval,
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        // new webpack.optimize.CommonsChunkPlugin('common.js'),
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery"
        })
    ],
    resolve: {
        //开启自动补全
        extensions: ['', '.min.js', '.js', '.json', '.vue'],
        // fallback: [path.join(__dirname, '../node_modules')],
        // alias: {
        // webpack 使用 jQuery，如果是自行下载的
        // 'jquery': "../source/js/jquery-2.1.0"
        // 如果使用NPM安装的jQuery
        // 'jquery': 'jquery'
        // }
        //定义路径重定向
        /*alias:{
                swiper:"swiper/dist/js/swiper.min.js",
                iscroll:"iscroll/build/iscroll-probe.js"
            }*/
    },
    devServer: {

        host: '192.168.31.100',
        port: 8080,
        proxy: {
            '/api/*': {
                target: 'http://139.196.209.6',
                secure: false
            },
            '/imgs/*': {
                target: "http://139.196.209.6:3000/",
                secure: false
            }

        }
    },

    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
}


// if (process.env.NODE_ENV === 'production') {
//   module.exports.plugins = [
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.optimize.OccurenceOrderPlugin()
//   ]
// } else {
//   module.exports.devtool = '#source-map'
// }
