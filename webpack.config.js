// node libs
const path = require('path');

let sourcePath = path.join(__dirname, 'src');
let buildPath = path.join(__dirname, 'lib');

let env = process.env.NODE_ENV === "development" ? "development" : "production";

module.exports = {
    entry: path.join(sourcePath, 'banner.tsx'),
    output: {
        path: buildPath,
        filename: 'index.js',
        libraryTarget: 'commonjs'
    },
    externals: {
        react: "react"
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
    resolve: {
        modules: [
            "node_modules",
            sourcePath
        ],
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json",".less",".css"]
    },
    target: "web",
    devServer: {
        
    }
}