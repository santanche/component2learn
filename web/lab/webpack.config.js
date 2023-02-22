const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './js/test.js',
  output: {
    filename: 'test-pack.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      filename: 'index.html',
      template: './template/index.html',
      lib: 'test-pack.js'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: 'index-dev.html',
      template: './template/index.html',
      lib: '../js/test.js'
    })
  ]
}