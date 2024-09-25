class ComponentRaw1 extends HTMLElement {
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
    const template = document.createElement('template')
    template.innerHTML = `<p>Hello, ${this.name}</p>`
    const clone = document.importNode(template.content, true)
    if (!this.shadowRoot)
      this.attachShadow({ mode: 'open' })
    else
      this.shadowRoot.innerHTML = ''
    this.shadowRoot.appendChild(clone)
    // this.innerHTML = `<p>Hello, ${this.name}</p>`
  }
}

customElements.define('component-composition-1', ComponentRaw1)