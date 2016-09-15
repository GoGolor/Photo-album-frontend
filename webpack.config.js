var path = require('path');
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    vendor: './src/vendor',
    app: './src/app'
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  },


  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
    new webpack.NoErrorsPlugin(),
  ]
}