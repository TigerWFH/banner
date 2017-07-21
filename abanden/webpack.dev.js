// node libs
const path = require('path');
const webpack = require('webpack');

// plugins
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let sourcePath = path.join(__dirname, 'src');
let buildPath = path.join(__dirname, 'build/static');

let env = process.env.NODE_ENV === "development" ? "development" : "production";

module.exports = {
    entry: path.join(sourcePath, "main.tsx"),
    output: {
        path: buildPath,
        filename: "bundles/[name].js"
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
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                            }
                        },
                        'less-loader'
                    ]
                })
            },
            {
                test: /\.(jpeg|jpg|png|gif)/,
                include: [path.join(sourcePath, "common/images")],
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: "images/[name]-[hash:8].[ext]"
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
            title: "Banner",
            template: path.join(sourcePath, "index.html")
        }),
        new ExtractTextWebpackPlugin("css/index.css")
    ]
};