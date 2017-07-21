// node libs
const path = require('path');

let sourcePath = path.join(__dirname, 'src/modules');
let buildPath = path.join(__dirname, 'lib/');

module.exports = {
    entry: path.join(sourcePath, "banner.tsx"),
    output: {
        path: buildPath,
        filename: 'index.js',
<<<<<<< HEAD:webpack.prd.js
        libraryTarget: "commonjs"
=======
        library: "banner",
        libraryTarget: "umd"
>>>>>>> 4f229dae45157df2d6e538500ad9c83f8980ecf5:abanden/webpack.prd.js
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
    },
    externals: {
        "react": "react",
        "react-dom": "react-dom"
    }
};