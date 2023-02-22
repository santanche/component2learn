export class ComponentOid1 extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  static builder () {
    Object.defineProperty(ComponentOid1.prototype, 'name', {
      get: function() {
        return this._name
      },
      set: function(newValue) {
        this._name = newValue
        this.render()
      }
    })
  }

  static get observedAttributes() {
    return ['name']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'name': this.name = newValue
    }
  }  

  render () {
    this.innerHTML = `<p>Hello, ${this.name}</p>`
  }
}

ComponentOid1.builder()

customElements.define('component-oid-1', ComponentOid1)