//webpack.config.js
const ExtractTextWebapckPlugin = require('extract-text-webpack-plugin');  //引入插件
const path = require('path') ;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    output:{
      filename:'main.js',
      path:path.resolve(__dirname,'./dist'),
      publicPath: '/'
    },
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
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
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
        new ExtractTextWebapckPlugin('style.css'),
        new HtmlWebpackPlugin({
          title:'gymbook',
          inject:'body',
          filename:'index.html',
          template:path.resolve(__dirname, "index.html")
        }),
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
