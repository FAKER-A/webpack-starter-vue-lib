const path = require('path')
const baseConfig = require('./webpack.base')
const merge = require('webpack-merge')
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = merge(baseConfig, {
  mode: 'production',
  entry: path.resolve(process.cwd(), 'index.js'),
  devtool: 'source-map',
  externals: {
    'vue': 'Vue'
  },
  plugins: [
    new BundleAnalyzer()
  ]
})