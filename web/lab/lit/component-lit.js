import {LitElement, css, html} from 'lit';

export class ComponentLit extends LitElement {
  static properties = {
    name: {},
  };
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      color: blue;
    }
  `;

  // Render the UI as a function of component state
  render() {
    return html`<p>Hello, ${this.name}</p>`;
  }
}

customElements.define('component-lit', ComponentLit);