# Web Frameworks and Components

# AngularJS

~~~html
<div ng-app="app">
  <sentenca></sentenca>
</div>
~~~

~~~js
angular.module('app', [])
  .component('sentenca', {
    template: `
    <h2 style="color:Blue">
      O Dinossauro pulou na lama.
    </h2>`
  })
~~~

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="VwaWwRw" data-user="santanche" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/santanche/pen/VwaWwRw">
  AngularJS 02 - Componente Sentença</a> by André Santanchè (<a href="https://codepen.io/santanche">@santanche</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

# React

~~~js
class Sentenca extends React.Component {
  render() {
    return <h1>
             O dinossauro {this.props.nome} pulou na lama.
           </h1>
  }
}

const elemento = <Sentenca nome="Horácio" />
ReactDOM.render(elemento, 
        document.getElementById('root'));
~~~

~~~html
<div id="root"></div>
~~~

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="XWdRyvo" data-user="santanche" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/santanche/pen/XWdRyvo">
  React 02 - Componente Sentença</a> by André Santanchè (<a href="https://codepen.io/santanche">@santanche</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

# Lightning

[Examples and Tasks](lightning/)