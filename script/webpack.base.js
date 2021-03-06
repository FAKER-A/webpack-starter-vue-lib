const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ProcessBarPlugin = require('progress-bar-webpack-plugin')
const packageJson = require(path.resolve(process.cwd(), 'package.json'))
module.exports = {
  entry: path.resolve(process.cwd(), 'index.js'), 
  output: {
    path: path.resolve(process.cwd(), 'dist'),     
    filename: `${packageJson.name}.js`,           // 文件名       
    library: `${packageJson.name}`,               // 包名
    libraryTarget: 'umd'                     // 格式
  },
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js?$/,
        use: 'babel-loader',
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        )
      }
    ],
  },
  plugins: [
    new ProcessBarPlugin(),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ]
}