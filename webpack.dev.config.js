const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const copy = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const resolve = dir => require("path").join(__dirname, dir);

const isDev = process.env.NODE_ENV === "development";
const isPublish = process.env.NODE_ENV === "publish";
const config = {
  mode: "development",
  entry: {
    example: "./src/example/main.ts"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash:4].js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
          },
        ],
        sideEffects: false,
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
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
      filename: "index.html",
      chunks: ["example"]// 于loader一样，在后面的会插到前面去
    })
  ],
  devServer: {
    port: 8088
  },
  devtool: "eval-source-map"
};
module.exports = config;