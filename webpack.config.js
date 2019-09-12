'use strict';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: 'production', // ONLY for this example
  module: {
    rules: [{
        test: /\.css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
        }, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp)$/,
        use: 'file-loader?name=[path][name]-[hash].[ext]'
      }
    ]
  },
  entry: {
    app: './app.js'
  },
  output: {
    path: path.join(__dirname, 'out'),
    filename: 'dist.js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    })
  ]
}
