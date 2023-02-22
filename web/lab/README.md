# Lab Notes

This lab has two modalities:
* **production** - in which webpack packs modules together and which can be processed strait by the browser;
* **development** - presented in its raw version and needs the Web Dev Server, as browsers do not support javascript imports.

The *production* version is at `dist/index.html`. There is a `<script type="module">` in the example, and browsers do not accept module inclusion from `file:` pages; they must be `http(s):`. You can load it from a server (e.g., GitHub server) or by the Web Dev Server:

~~~
npx web-dev-server --app-index dist/index.html --node-resolve --open
~~~

The development version is at `dist/index-dev.html`. It works only through Web Dev Server.

~~~
npx web-dev-server --app-index dist/index-dev.html --node-resolve --open
~~~

Both files (`index.html` and `index-dev.html`) derive from the same template: `template/index.html` using the [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/), specifically the [HTML Webpack Template](https://github.com/jaketrent/html-webpack-template).

This insertion in the `webpack.config.js` produces both files:
~~~js
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
~~~

The clause `inject:false` avoids automatic injection of the javascript packaged before. The `lib` property is dynamically replaced in the template.

# Installation Commands

1. installing webpack: `npm install webpack webpack-cli --save-dev`
2. installing HtmlWebpackPlugin: `npm install --save-dev html-webpack-plugin`
3. installing http-server: `npm install @web/dev-server --save-dev`