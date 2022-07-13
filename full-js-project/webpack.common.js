const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const pathToMainJs = require.resolve("./src/app.js");
const pathToIndexCss = require.resolve("./src/css/style.css");
const pathToIndexHtml = require.resolve("./src/index.html");
const pathToIndexFavicon = require.resolve("./src/assets/img/favicon.png");
const pathToIndexJs = require.resolve("./src/js/main.js");

module.exports = {
  entry: ["@babel/polyfill", pathToMainJs, pathToIndexCss, pathToIndexHtml, pathToIndexFavicon, pathToIndexJs],
  plugins: [new CleanWebpackPlugin()],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(css|sass|scss)$/i,
        type: "asset/resource",
        generator: {
          filename: "css/[name][ext][query]",
        },
      },
      {
        test: /\.html$/i,
        type: "asset/resource",
        generator: {
          filename: "[name][ext][query]",
        },
      },
      {
        test: /\.(png|jpg|ico|jpeg|gif|svg|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/img/[name][ext][query]",
        },
      },
    ],
  },
};
