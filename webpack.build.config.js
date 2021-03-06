const path = require("path");
// const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const resolve = dir => require("path").join(__dirname, dir);
const UglifyPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");
const {version, author, homepage} = require('./package.json')
const libraryName = 'ImgZoom'
const config = {
    mode: "production",
    entry: {
        index: "./src/index.ts",
    },
    output: {
        path: path.resolve(__dirname, "lib-umd"),
        filename: "[name].js",
        library: libraryName, // 指定类库名,主要用于直接引用的方式(比如使用script 标签)
        libraryExport: "default", // 对外暴露default属性，就可以直接调用default里的属性
        globalObject: "this", // 定义全局变量,兼容node和浏览器运行，避免出现"window is not defined"的情况
        libraryTarget: "umd", // 定义打包方式Universal Module Definition,同时支持在CommonJS、AMD和全局变量使用
    },
    module: {

        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    "babel-loader",
                    {
                        loader: "ts-loader",
                        options: {
                            configFile: "tsconfig.webpack.json",
                        },
                    },
                ],
                sideEffects: false,
                // include: [path.resolve(__dirname, "@mxssfd/ts-utils/lib-es/*.js")],
                // exclude: [path.resolve(__dirname, "node_modules")],
                // include: /mxssfd/,
            },
            {
                test(filename) {
                    if (/ts-utils/.test(filename)) {
                        // console.log(filename);
                        return true;
                    }
                    return false;
                },
                // test: /ts-utils\/.*js$/,
                loader: "babel-loader",
                sideEffects: false,
                // exclude: /node_modules\/(?!@mxssfd)/,
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        // plugins: [new TsconfigPathsPlugin({configFile: "./tsconfig.webpack.json"})],
    },
    optimization: {
        usedExports: true,
        minimize: true,
    },
    plugins: [
       /* new UglifyPlugin({
            test: /\.[jt]s/i,
            // exclude: /node_modules\/(?!@mxssfd)/,
        }),*/
        new webpack.BannerPlugin({
            entryOnly: true, // 是否仅在入口包中输出 banner 信息
            banner: () => {
                const date = new Date();
                return `${libraryName} v${version}`
                  + `\n`
                  + `Author: ${author}`
                  + `\n`
                  + `Documentation: ${homepage}`
                  + `\n`
                  + `Date: ${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
            }
        }),
        // package.js有了clean命令
        /*new CleanWebpackPlugin({
           cleanOnceBeforeBuildPatterns: [
               resolve("types/!*"),
               resolve("lib-umd/!*"),
               resolve("lib-es/!*"),
           ],
       }),*/
    ],
};
module.exports = config;
