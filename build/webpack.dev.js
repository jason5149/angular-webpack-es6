const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    //  入口
    entry: {
        'bundle': './src/app.js',
        'vendors': ['angular', 'angular-ui-router'],
    },
    //  输出
    output: {
        filename: '[name].js',
        publicPath: '/dist/',
        path: path.join(__dirname, '../dist')
    },
    //  加载器
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'stage-2'],
                        plugins: ['transform-runtime']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                    }
                }]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
        ]
    },

    resolve: {
        extensions: ['.js', '.json', '.scss', '.vue'],
    },

    plugins: [
        // new webpack.ProvidePlugin({
        // $: 'jquery',
        // jQuery: 'jquery',
        // 'window.jQuery': 'jquery',
        // moment: 'moment'
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['bundle', 'vendors'],
            minChunks: Infinity
        }),
        new ExtractTextPlugin('style.css'),
        new webpack.HotModuleReplacementPlugin(),
    ],

    devtool: '#source-map'
};