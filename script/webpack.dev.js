const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.resolve(process.cwd(), 'example/index.js'),
  devServer: {
    contentBase: path.resolve(process.cwd(),'dist'),
    compress: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'demo',
      template: path.resolve(process.cwd(), 'template.html')
    })
  ]
})