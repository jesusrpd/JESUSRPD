const path = require("path");

const config = {
    mode: process.env.NODE_ENV || 'development',
    entry: ["@babel/polyfill", "./src/index.js"],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "main.js",
    },
    devServer: {
        contentBase: path.resolve(__dirname, "build"),
        compress: true,
        port: 3000,
        open: true,
        watchContentBase: true
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.js', '.jsx', 'json']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};

module.exports = config;