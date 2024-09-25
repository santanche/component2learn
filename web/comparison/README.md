# Lab Notes

This lab has three modalities:
* **production** (`dist/index.html`) - in which webpack packs modules together and can be processed strait by the browser;
* **map** (`dist/index-map.html`) - presented in its raw version with a mapping reference to external libraries;
* **development** (`dist/index-dev.html`) - presented in its raw version and refers to packages installed locally via npm.

~~~
npx webpack
~~~

There is a `<script type="module">` clause in the *production* and *map* examples, and browsers do not accept module inclusion from `file:` pages; they must be `http(s):`. You can load them from a server (e.g., GitHub server) or by the Web Dev Server:

~~~
npx web-dev-server --app-index dist/index.html --node-resolve --open
~~~

and

~~~
npx web-dev-server --app-index dist/index-map.html --node-resolve --open
~~~

The *development* version works only through Web Dev Server as it refers to files resolved locally:

~~~
npx web-dev-server --app-index dist/index-dev.html --node-resolve --open
~~~

The three files (`index.html`, `index-map.html`, and `index-dev.html`) derive from the same template: `template/index.html` using the [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/), specifically the [HTML Webpack Template](https://github.com/jaketrent/html-webpack-template).

This insertion in the `webpack.config.js` produces both files:
~~~js
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
~~~

The clause `inject:false` avoids automatic injection of the javascript packaged before. The `lib` and `map` properties are dynamically replaced in the template.

# Installation Commands

1. installing webpack: `npm install webpack webpack-cli --save-dev`
2. installing HtmlWebpackPlugin: `npm install --save-dev html-webpack-plugin`
3. installing http-server: `npm install @web/dev-server --save-dev`