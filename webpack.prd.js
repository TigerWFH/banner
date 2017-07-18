// node libs
const path = require('path');

let sourcePath = path.join(__dirname, 'src');
let buildPath = path.join(__dirname, 'dist/');

module.exports = {
    output: {
        path: buildPath,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: [sourcePath],
                use: ['awesome-typescript-loader']
            },
            {
                test: /\.less$/,
                include: [sourcePath],
                use: []
            },
            {
                test: /\.(jpeg|jpg|png|gif)/,
                include: [path.join(sourcePath, 'common/images')],
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'images/[name]-[hash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    }
};