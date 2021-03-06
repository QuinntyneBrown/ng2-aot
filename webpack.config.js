﻿var webpack = require('webpack');

var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = {
    devtool: 'source-map',
    entry: {
        'vendor': ['./src/polyfills', './src/vendor'],
        'app': './src/main'
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        publicPath: "dist/"
    },
    resolve: {
        extensions: ['.ts', '.js', '.jpg', '.jpeg', '.gif', '.png', '.css', '.html']
    },
    module: {
        loaders: [
            { test: /\.scss$/, exclude: /node_modules/, loaders: ['raw-loader', 'sass-loader'] },
            { test: /\.(jpg|jpeg|gif|png)$/, loader: 'file-loader?name=img/[path][name].[ext]' },
            { test: /\.(eof|woff|woff2|svg)$/, loader: 'file-loader?name=img/[path][name].[ext]' },
            { test: /\.css$/, loader: 'raw-loader' },
            { test: /\.html$/, loaders: ['html-loader'] },
            { test: /\.ts$/, loaders: ['angular2-router-loader?loader=system', 'awesome-typescript-loader'], exclude: /node_modules/ }
        ]
    },
    plugins: [
        new CommonsChunkPlugin({ name: 'vendor' }),
        new UglifyJsPlugin({
            // beautify: true, //debug
            // mangle: false, //debug
            // dead_code: false, //debug
            // unused: false, //debug
            // deadCode: false, //debug
            // compress: {
            //   screw_ie8: true,
            //   keep_fnames: true,
            //   drop_debugger: false,
            //   dead_code: false,
            //   unused: false
            // }, // debug
            // comments: true, //debug


            beautify: false, //prod
            mangle: { screw_ie8: true, keep_fnames: true }, //prod
            compress: { screw_ie8: true }, //prod
            comments: false //prod
        })
    ]
};