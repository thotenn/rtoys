const webpack = require('webpack');
const pkg = require('./package.json');
const path = require('path');
const libraryName= pkg.name;
module.exports = {
    entry: path.join(__dirname, "./src/index.js"),
    output: {
        chunkFilename: "[id]-[chunkhash].js",
        clean: true,
        path: path.join(__dirname, './dist'),
        filename: 'main.bundle.js',
        library: libraryName,
        libraryTarget: 'umd',
        publicPath: '/dist/',
        umdNamedDefine: true
    },
    module: {
        rules : [
            {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                {
                    loader: 'url-loader',
                    options:{
                        fallback: "file-loader",
                        name: "[name][md5:hash].[ext]",
                        outputPath: 'assets/',
                        publicPath: '/assets/'
                    }
                }    
            ]
        },
        {
            test: /\.*css$/,
            use: ["style-loader", "css-loader"],
        },
        {
            test: /\.(js|jsx|mjs)?$/,
            include: path.resolve(__dirname, 'src'),
            exclude: /(node_modules|bower_components|build|__pycache__|static)/,
            use: {
                loader: "babel-loader",
                options: {presets: ["@babel/env", "@babel/preset-react"]}
            },
        },
        {
            test: /\.(eot|ttf|woff|woff2)$/,
            use: ["file-loader"],
        },
        {
            test: /\.(pdf|doc|zip)$/,
            use: ["file-loader"],
        }]
    },
    resolve: { 
        alias: { 
            'react': path.resolve(__dirname, './node_modules/react') ,
            'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
            'assets': path.resolve(__dirname, 'assets')
        } 
    },
    externals: {
        // Don't bundle react or react-dom
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {NODE_ENV: JSON.stringify("production"),},
        }),
    ],
    presets: [
        ["@babel/preset-env", {
            "exclude": ["transform-function-name"]
        }]
    ]
};