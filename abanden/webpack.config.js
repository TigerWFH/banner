// node libs
const path = require('path');

let conditionConfig = require('./webpack.dev.js');
let buildPath = path.join(__dirname, 'build/static');
let sourcePath = path.join(__dirname, 'src');

let env = process.env.NODE_ENV === "development" ? "development" : "production";
if (env === "production") {
    conditionConfig = require('./webpack.prd.js');
    sourcePath = path.join(__dirname, 'src/modules');
    buildPath = path.join(__dirname, 'dist');
}

let config = {
    resolve: {
        modules: [
            "node_modules",
            sourcePath
        ],
        extensions: [".tsx", ".ts", ".jsx", ".js", ".less", ".css", ".json"]
    },
    target: "web",
    devServer: {
        contentBase: buildPath,
        port: 8080,
        compress: true,
        watchContentBase: true,
        hot: true,
        noInfo: true,
        quiet: true,
        proxy: {
            "/v1": "http:localhost:9000"
        }
    }
};
module.exports = Object.assign({}, config, conditionConfig);