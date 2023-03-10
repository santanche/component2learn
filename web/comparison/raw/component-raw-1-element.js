export class ComponentRaw1 extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  static get observedAttributes() {
    return ['name']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render()
  }  

  get name() {
    return this.getAttribute('name')
  }

  set name(newValue) {
    this.setAttribute('name', newValue)
    this.render()
  }

  render () {
    this.innerHTML = `<p>Hello, ${this.name}</p>`
  }
}

customElements.define('component-raw-1-element', ComponentRaw1)