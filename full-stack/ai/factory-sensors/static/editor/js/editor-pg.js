import { Sphere, Bus } from 'https://cdn.jsdelivr.net/npm/@mundorum/collections@0.3.0/full.js'
// import { Sphere, Bus } from '@mundorum/oid/oid.js'

// if (!new URL(document.location).searchParams.has('dev')) {
//   await import('@mundorum/collections/full.js')
// }

export class EditorPg {
  start () {
    this._controlSphere = Sphere.get('control').bus
    this._controlSphere.subscribe(
      'file/loaded', this._renderFile.bind(this))
    this._controlSphere.subscribe(
      'control/download/code', this._downloadCode.bind(this))
    this._controlSphere.subscribe(
      'control/download/page', this._downloadPage.bind(this))
    this._controlSphere.subscribe(
      'control/render', this._renderOids.bind(this))
    this._controlSphere.subscribe(
      'control/code', this._codeOids.bind(this))
    this._controlSphere.subscribe(
      'control/clear', this._clearOids.bind(this))
    Bus.i.subscribe('#', this._busMonitor.bind(this))
  }

  _renderFile (topic, message) {
    this._template = message.value
    document.querySelector("#pg-render").innerHTML = this._template
    this._showTree()
  }

  _showTree () {
    const root = document.querySelector("#pg-render")
    this._controlSphere.publish('tree/clear')
    document.querySelector("#oid-list").innerHTML =
      '<option value="">Select an OID</option>'
    for (let childId = 1; childId <= root.children.length; childId++)
      this._buildTree(root.children[childId-1], null, childId)
  }

  _buildTree (element, parentId, childId) {
    const id = (parentId != null) ? `${parentId}.${childId}` : `${childId}`
    const name = element.nodeName.toLowerCase()

    // node
    const node = { id: id,
                   label: name + (element.id ? `: ${element.id}` : '') }
    if (!name.endsWith('-oid'))
      node.format = 'light'
    this._controlSphere.publish('tree/node', node)
    if (element.id) {
      const option = document.createElement('option')
      option.value = element.id
      option.text = element.id
      document.querySelector("#oid-list").appendChild(option)
    }

    // edge
    if (parentId != null) {
      const edge = { source: parentId,
                     target: id }
      this._controlSphere.publish('tree/edge', edge)
    }

    for (let childId = 1; childId <= element.children.length; childId++)
      this._buildTree(element.children[childId-1], id, childId)
  }

  _renderOids () {
    const div = document.createElement('div')
    div.innerHTML = document.querySelector("#pg-editor").value

    const selectedOption = document.querySelector("#oid-list").value
    let base = document.querySelector(
      (selectedOption === '') ? '#pg-render' : `#${selectedOption}`)

    if (base instanceof SVGElement) {
      const foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject')
      foreignObject.setAttribute('width', '100%')
      foreignObject.setAttribute('height', '100%')
      base.appendChild(foreignObject)
      base = foreignObject
    }

    while (div.firstChild)
      base.appendChild(div.firstChild)

    this._showTree()
  }

  _codeOids () {
    const selectedOption = document.querySelector("#oid-list").value
    const base = document.querySelector(
      (selectedOption === '') ? '#pg-render' : `#${selectedOption}`)
    document.querySelector("#pg-editor").value = base.innerHTML
  }

  _clearOids () {
    document.querySelector("#pg-render").innerHTML = 
      (this._template != null) ? this._template : ''
    this._showTree()
  }

  _busMonitor (topic, message) {
    Sphere.get('control').bus.
      publish('control/monitor', {value: `[${topic}] ${JSON.stringify(message)}`})
  }

  _downloadCode () {
    this._download('code.html', document.querySelector('#pg-render').innerHTML)
  }

  _downloadPage () {
    this._download('page.html',
                   EditorPg.pageBegin +
                   document.querySelector('#pg-render').innerHTML +
                   EditorPg.pageEnd)
  }

  _download (fileName, content) {
    const a = document.createElement('a')
    a.style.display = 'none'
    document.body.appendChild(a)
    a.href = window.URL.createObjectURL(
      new Blob([content], {type: 'text/plain'}))
    a.setAttribute('download', fileName)
    a.click()
    window.URL.revokeObjectURL(a.href)
    document.body.removeChild(a)
  }
}

EditorPg.i = new EditorPg()

EditorPg.pageBegin =
`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mundorum/oid/oid.min.css">
  <script src="https://cdn.jsdelivr.net/npm/@mundorum/collections/full.min.js"></script>
</head>
<body>
<oid-sphere assets="https://mundorum.github.io/oid/oid/playground/assets/" stydefault="https://cdn.jsdelivr.net/npm/@mundorum/oid/oid.min.css" global></oid-sphere>`

EditorPg.pageEnd =
`</body>
</html>`