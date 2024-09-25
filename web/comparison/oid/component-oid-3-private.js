export class ComponentOid3 extends HTMLElement {
  #name

  connectedCallback () {
    this.render()
  }

  static builder () {
    Object.defineProperty(ComponentOid3.prototype, 'name', {
      get: function() {
        return this.#name
      },
      set: function(newValue) {
        this.#name = newValue
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

ComponentOid3.builder()

customElements.define('component-oid-3-private', ComponentOid3)