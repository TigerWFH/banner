// node libs
const path = require('path');

let sourcePath = path.join(__dirname, 'src');
let buildPath = path.join(__dirname, 'lib');


module.exports = {
    entry: path.join(sourcePath, 'banner.tsx'),
    output: {
        path: buildPath,
        filename: 'index.js',
        library: 'banner',
        libraryTarget: 'commonjs'
    },
    externals: {
        react: "React"
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
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            }
        ]
    }
}