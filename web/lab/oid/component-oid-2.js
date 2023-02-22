export class ComponentOid2 extends HTMLElement {
  static cc = {
    properties: ['name']
  }

  connectedCallback () {
    this.render()
  }

  static get observedAttributes() {
    return this.cc.properties
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue
  }

  render () {
    this.innerHTML = `<p>Hello, ${this.name}</p>`
  }
}

ComponentOid2.cc.properties.forEach((property) => {
  Object.defineProperty(ComponentOid2.prototype, property, {
    get: function() {return this['_' + property]},
    set: function(newValue) {
      this['_' + property] = newValue
      this.render()
    }
  })
})

customElements.define('component-oid-2', ComponentOid2)