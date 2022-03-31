const path = require("path")

module.exports = {

    output: {

        path: path.join(__dirname, "build"),
        filename: "bundle.js"
    },
    module: {

        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    publicPath: 'assets',
                    emitFile: true

                },
            },
        ]

    }

}