export class ComponentRaw2 extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  static get observedAttributes() {
    return ['name']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'name': this.name = newValue
    }
  }  

  get name() {
    return this._name
  }

  set name(newValue) {
    this._name = newValue
    this.render()
  }

  render () {
    this.innerHTML = `<p>Hello, ${this.name}</p>`
  }
}

customElements.define('component-raw-2-protected', ComponentRaw2)