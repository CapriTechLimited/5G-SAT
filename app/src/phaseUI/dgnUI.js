// renders the design phase UI

const phaseMenu = require('../../src/phaseMenu.js')

module.exports = function designUI () {
  // shows design phase on the title
  const title = document.getElementById('title-bar-id')
  title.innerHTML = `design phase`

  // show sidebars
  const actionBar = document.getElementById('action-bar-id')
  actionBar.style.display = 'block'
  const sidebar = document.getElementById('sidebar-id')
  sidebar.style.display = 'block'

  // binds the design phase buttons on the UI
  const dgnComponents = document.getElementById('components-id')

  dgnComponents.innerHTML = `
<div class="dropdown" id="add-component-id">
  <button class="button-icon dropbtn">
    <svg width="24" height="24">
      <use xlink:href="icons/add-node.svg#add-node" class="icon"></use>
    </svg>
  </button>
  <ul class="dropdown-menu">
    <li><a>service provider</a></li>
    <li><a>infrastructure provider</a></li>
    <li><a>cescm</a></li>
    <li><a>vim</a></li>
    <li><a>main dc</a></li>
    <li><a>light dc</a></li>
    <li><a>vnf</a></li>
    <li><a>storage</a></li>
    <li><a>process</a></li>
    <li><a>constraint</a></li>
    <li><a>asset</a></li>
    <li><a>end user</a></li>
    <li><a>threat</a></li>
    <li><a>malicious actor</a></li>
  </ul>
</div>

<button class="button-icon" id="add-edge" title="connection">
  <svg width="24" height="24">
    <use xlink:href="icons/gesture.svg#gesture" class="icon"></use>
  </svg>
</button>

<button class="button-icon" id="delete" title="remove">
  <svg width="24" height="24">
    <use xlink:href="icons/remove.svg#remove" class="icon"></use>
  </svg>
</button>

<div class="dropdown" id="selection-id">
  <button class="button-icon dropbtn">
    <svg width="24" height="24">
      <use xlink:href="icons/list.svg#list" class="icon"></use>
    </svg>
  </button>
  <ul class="dropdown-menu">
    <li><a>service provider</a></li>
    <li><a>infrastructure provider</a></li>
    <li><a>cescm</a></li>
    <li><a>vim</a></li>
    <li><a>main dc</a></li>
    <li><a>light dc</a></li>
    <li><a>vnf</a></li>
    <li><a>storage</a></li>
    <li><a>process</a></li>
    <li><a>constraint</a></li>
    <li><a>asset</a></li>
    <li><a>end user</a></li>
    <li><a>threat</a></li>
    <li><a>malicious actor</a></li>
  </ul>
</div>

<div class="dropdown" id="module-group">
  <button class="button-icon dropbtn">
    <svg width="24" height="24">
      <use xlink:href="icons/module.svg#module" class="icon"></use>
    </svg>
  </button>
  <ul class="dropdown-menu">
    <li><a>network</a></li>
    <li><a>security</a></li>
    <li><a>social</a></li>
    <li><a>sensing</a></li>
    <li><a>network-security</a></li>
    <li><a>network-sensing</a></li>
    <li><a>security-sensing</a></li>
    <li><a>network-social</a></li>
  </ul>
</div>

<div class="dropdown" id="layout-button">
  <button class="button-icon dropbtn" title="layout options">
    <svg width="24" height="24">
      <use xlink:href="icons/group.svg#group" class="icon"></use>
    </svg>
  </button>
  <ul class="dropdown-menu">
    <li><a>cose</a></li>
    <li><a>breadthfirst</a></li>
    <li><a>breadthfirst(circle)</a></li>
    <li><a>circle</a></li>
    <li><a>grid</a></li>
    <li><a>concentric</a></li>
  </ul>
</div>

<button class="button-icon" id="threat-verify-button" title="threat verification">
  <svg width="24" height="24">
    <use xlink:href="icons/security.svg#security" class="icon"></use>
  </svg>
</button>

<button class="button-icon" id="model-validate-button" title="model validation">
  <svg width="24" height="24">
    <use xlink:href="icons/check.svg#check" class="icon"></use>
  </svg>
</button>

<button class="button-icon" id="overview-button" title="overview">
  <svg width="24" height="24">
    <use xlink:href="icons/explore.svg#explore" class="icon"></use>
  </svg>
</button>

<button class="button-icon" id="pattern-button" title="patterns">
  <svg width="24" height="24">
    <use xlink:href="icons/search.svg#search" class="icon"></use>
  </svg>
</button>

<button class="button-icon" id="save-button">
  <svg width="24" height="24">
    <use xlink:href="icons/save.svg#save" class="icon"></use>
  </svg>
</button>

<!-- <button class="button-icon" id="load-button">
  <svg width="24" height="24">
    <use xlink:href="icons/folder.svg#folder" class="icon"></use>
  </svg>
</button> -->

<form>
  <button class="button-icon" id="home-button-id" type="submit" formaction="index.html" title="home">
    <svg width="24" height="24">
      <use xlink:href="icons/home.svg#home" class="icon"></use>
    </svg>
  </button>
</form>

<!-- <button class="button-icon" id="test-button" title="test">
  <svg width="24" height="24">
    <use xlink:href="icons/bug.svg#bug" class="icon"></use>
  </svg>
</button> -->

<div class="label-wrapper" id="label-wrapper-id">
  <button class="label-button" id="hide-label" title="hide labels">1</button>
  <button class="label-button" id="show-label-edge" title="show edge labels">2</button>
  <button class="label-button" id="show-label-node" title="show node labels">3</button>
  <button class="label-button" id="show-node-id" title="show nodes id">4</button>
  <button class="label-button" id="show-node-disc" title="show node description">5</button>
</div>

</div>`

  // links the design UI with the rest of the app
  phaseMenu('design')
}
