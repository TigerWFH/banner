// node libs
const path = require('path');
const webpack = require('webpack');
// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


let sourcePath = path.join(__dirname, 'src');
let env = process.env.NODE_ENV === "development" ? "development" : "production";
let title = "Banner Module";
let template = path.join(__dirname, 'src/index.html')

let devConfig = {
    entry: path.join(sourcePath, 'main.tsx'),
    output: {
        path: path.join(__dirname, "build/static"),
        filename: 'bundles/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: [sourcePath],
                use: ["awesome-typescript-loader"]
            },
            {
                test: /\.less$/,
                include: [sourcePath],
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'less-loader'
                        }
                    ]
                })
            },
            {
                test: /\.(png|gif|jpg|jpeg)$/,
                include: [sourcePath],
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(env)
        }),
        new HtmlWebpackPlugin({
            title: title,
            template: template
        }),
        new ExtractTextWebpackPlugin("css/main.css"),
        new CleanWebpackPlugin(["build"], {
            root: __dirname,
            watch: true
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'build/static'),
        port: 8080,
        compress: true,
        watchContentBase: true,
        hot: true,
        noInfo: true,
        quiet: true,
        proxy: {
            "/v1": "http://localhost:9000"
        }
    }
};

let prdConfig = {
    entry: path.join(sourcePath, 'banner.tsx'),
    output: {
        path: path.join(__dirname, 'lib'),
        filename: 'banner.js',
        libraryTarget: 'commonjs'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: [sourcePath],
                use: ["awesome-typescript-loader"]
            },
            {
                test: /\.less$/,
                include: [sourcePath],
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.(jpeg|jpg|png|gif)$/,
                include: [sourcePath],
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    externals: {
        react: "react"
    }
};

let commonConfig = {
    resolve: {
        modules: [
            "node_modules",
            sourcePath
        ],
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json", ".less", ".css"]
    },
    target: "web",
};

let targetConfig = Object.assign({}, commonConfig, prdConfig);
if (process.env.NODE_ENV === "development") {
    targetConfig = Object.assign({}, commonConfig, devConfig);
}

module.exports = targetConfig;