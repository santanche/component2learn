export class ComponentRaw3 extends HTMLElement {
  #name
  
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
    return this.#name
  }

  set name(newValue) {
    this.#name = newValue
    this.render()
  }

  render () {
    this.innerHTML = `<p>Hello, ${this.name}</p>`
  }
}

customElements.define('component-raw-3-private', ComponentRaw3)