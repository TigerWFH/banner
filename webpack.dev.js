module.exports = {
    entry: "",
    output: {
        path: "",
        filename: ""
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: '',
                use: []
            }
        ]
    },
    plugins: [

    ],
    resolve: {
        modules: [
            "node_moudles",
            "src"
        ],
        extensions: [".tsx", ".ts", ".jsx", ".js", ".less", ".css", ".json"]
    },
    target: "web",
    devServer: {

    }
}