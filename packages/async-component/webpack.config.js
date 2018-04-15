"use strict";

const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  "mode":"production",
  devtool: "cheap-module-source-map",
  entry: {index: "./src/index.js"},
  output: {
    path: path.join(__dirname, "dist"),
    pathinfo: true,
    filename: "./[name].js"
  },
  resolve: {
    modules: ["node_modules", "src"],
    extensions: [".js", ".json", ".jsx"]
  },
  module: {
    strictExportPresence: true,
    rules: [
      // Process JS with Babel.
      {
        test: /\.(js|jsx)$/,
        loader: require.resolve("babel-loader")
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: require.resolve("css-loader"),
              options: {
                importLoaders: 1,
                //  modules: true,
                sourceMap: true,
              }
            },
            {
              loader: require.resolve("postcss-loader"),
              options: {
                ident: "postcss", // https://webpack.js.org/guides/migrating/#complex-options
                plugins: loader => [
                  require("postcss-flexbugs-fixes"),
                  require("postcss-cssnext")()
                ]
              }
            }
          ]
        })
      }
    ]
  },
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty"
  },
  performance: {
    hints: false
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
  ]
};
