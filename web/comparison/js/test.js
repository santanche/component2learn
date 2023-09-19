import {ComponentRaw1} from '../raw/component-raw-1-element.js'
import {ComponentRaw2} from '../raw/component-raw-2-protected.js'
import {ComponentRaw3} from '../raw/component-raw-3-private.js'
import {ComponentOid1} from '../oid/component-oid-1.js'
import {ComponentOid2} from '../oid/component-oid-2.js'
import {ComponentOid3} from '../oid/component-oid-3-private.js'
import {ComponentLit}  from '../lit/component-lit.js'

function testComponent () {
  const compSet = [
    {element: 'component-raw-1-element',   cclass: ComponentRaw1},
    {element: 'component-raw-2-protected', cclass: ComponentRaw2},
    {element: 'component-raw-3-private',   cclass: ComponentRaw3},
    {element: 'component-oid-1', cclass: ComponentOid1},
    {element: 'component-oid-2', cclass: ComponentOid2},
    {element: 'component-oid-3-private', cclass: ComponentOid3},
    {element: 'component-lit',   cclass: ComponentLit}
  ]

  for (const c of compSet) {
    console.log(`=== ${c.element} ===`)
    const block = document.querySelector('#' + c.element + '-block')

    // testing straight property assignment
    const component1 = new c.cclass
    console.log('--- component structure')
    console.log(component1)
    component1.name = 'Doriana'
    console.log(`--- straight assignment (name): ${component1.name}`)

    // testing element attribute assignment
    const component2 = document.createElement(c.element)
    component2.setAttribute('name', 'Quincas')
    console.log(`--- element attribute assignment (name): ${component2.name}`)
    block.appendChild(component2)

    // testing reactivity 1
    const component3 = document.createElement(c.element)
    block.appendChild(component3)
    component3.name = 'Alcebiades'
    console.log(`--- reactivity 1 (name): ${component3.name}`)
  
    // testing reactivity 2
    const component4 = document.createElement(c.element)
    block.appendChild(component4)
    component4.setAttribute('name', 'Mila')
    console.log(`--- reactivity 2 (name): ${component4.name}`)
  }
}

testComponent()