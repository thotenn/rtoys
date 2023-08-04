const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    entry: [
        path.resolve(__dirname, './src/index.js')
    ],
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: 'main.bundle.js',
        chunkFilename: "[id]-[chunkhash].js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs)?$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components|build|__pycache__|static|templates)/,
                // loader: 'babel-loader'
                use: {  // NEW
                    loader: "babel-loader",
                    options: {presets: ["@babel/env", "@babel/preset-react"]}
                },
            }, {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ]
    },
    optimization: {
        minimize: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new webpack.DefinePlugin({
            "process.env": {
                // This has effect on the react lib size
                // NODE_ENV: JSON.stringify("production"),
                NODE_ENV: JSON.stringify("development"),
            },
        }),
    ]
}