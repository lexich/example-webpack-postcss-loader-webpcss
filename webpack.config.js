"use strict";
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpcss = require("webpcss");

module.exports = {
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader","css-loader!postcss-loader") },
      { test: /\.(png|jpg|jpeg|gif|svg|webp)$/, loader: "file-loader?name=[path][name]-[hash].[ext]" }
    ]
  },
  entry: {
    app: "./app.js"
  },
  output: {
    path: "out",
    filename: "dist.js"
  },
  postcss: function () {
    return [webpcss.default];
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
}
