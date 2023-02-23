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
      lib: 'test-pack.js',
      map: ''
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: 'index-map.html',
      template: './template/index.html',
      lib: '../js/test.js',
      map: '<script type="importmap"> { "imports": {"lit": "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js"} } </script>'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: 'index-dev.html',
      template: './template/index.html',
      lib: '../js/test.js',
      map: ''
    })
  ]
}