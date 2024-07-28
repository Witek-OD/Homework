const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    watch: true,
    mode:'production',
    entry: {
        filename:path.resolve(__dirname, 'src/js/index.js'),

    },
    output: {
        path:path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/html', 'index.html'),
            filename: 'index.html',
        },),
        new MiniCssExtractPlugin({
            filename: 'main.css',
         }),
    ],
    devServer: {
             watchFiles: path.join(__dirname, 'src'),
             port: 9000,
       },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
           },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },


        ],
    },
}