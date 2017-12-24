const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    // the entry file for the bundle
    entry: path.join(__dirname, './client/src/js/index.js'),

    // the bundle file we will get in the result
    output: {
        path: path.join(__dirname, './client/dist/js'),
        filename: 'index.js'
    },
    devServer: {
        // host: 'localhost',
        port: '9000',
        inline: true,
        contentBase: './client/dist',
        // hotOnly: true
        watchOptions: {
            // Delay the rebuild after the first change
            aggregateTimeout: 300,

            // Poll using interval (in ms, accepts boolean too)
            poll: 1000,
        },
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, '/client/src'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['babel-plugin-transform-class-properties']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/src/index.html',
            filename: '../index.html'
        }),
    ],
    devtool: 'cheap-eval-source-map'
};