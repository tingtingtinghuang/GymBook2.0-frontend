//webpack.config.js
const ExtractTextWebapckPlugin = require('extract-text-webpack-plugin');  //引入插件

module.exports = {
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextWebapckPlugin.extract({ use: 'css-loader' })
                    }
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'

            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{ loader: 'url-loader',options: { limit: 8192 } }]
            },
            {
                test:/\.(sass|scss)$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.svg/,
                use: ['file-loader']
            }
        ]
    },
    plugins:[
        new ExtractTextWebapckPlugin('style.css')
    ],
    resolve: {  //导入的时候不用写拓展名
        extensions: [' ', '.js', '.json', '.vue', '.scss', '.css']
    },
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,//防止重复保存频繁重新编译,300ms内重复保存不打包
        poll: 1000  //每秒询问的文件变更的次数
    },
    devServer:{
        inline: true,
        compress: true,
        host: '127.0.0.1',
        port: 2500,
        historyApiFallback: true
    }
}
