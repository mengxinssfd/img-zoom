const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const copy = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const resolve = dir => require('path').join(__dirname, dir);

const isDev = process.env.NODE_ENV === "development";
const isPublish = process.env.NODE_ENV === "publish";
const config = {
    mode: "development",
    // devtool: isDev ? "cheap-module-source-map" : "",
    entry: isPublish ? {
        index: "./src/index.ts",
    } : {
        example:
        // "./node_modules/babel-polyfill/dist/polyfill.js",
            "./src/example/main.ts",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: isPublish ? "[name].js" : "[name].[hash:4].js",
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "less-loader",
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                use: ["babel-loader", "ts-loader"],
                exclude: [path.resolve(__dirname, "node_modules")],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    plugins: [
        /* new copy([
             {
                 from: path.resolve(__dirname, './static'),
                 to: path.resolve(__dirname, './dist/static'),
                 ignore: ['.*']
             }
         ]) */
    ],
    devServer: {
        // publicPath: '/',
        port: 8080,
    },
};
if (!isDev) {
    config.plugins.push(new CleanWebpackPlugin());
}
if (!isPublish) {
    config.plugins.push(new HtmlPlugin({
        template: './index.html',
        filename: 'index.html',
        chunks: ['example'],// 于loader一样，在后面的会插到前面去
    }));
} else {
    config.module.rules[1].exclude.push(path.resolve(__dirname, "example"));
}
module.exports = config;