// watch the graph for changes
const { dialog } = require('electron').remote

let changeToken = false

/**
 * watch the graphs nodes for changes
 *
 * @param {Object} graphNodes nodes of the graph
 * @param {Object} cy cytoscpe instance
 */
const nodes = (graphNodes, cy) => {
  const titleBar = document.getElementById('title-bar-id')

  if (graphNodes.same(cy.nodes()) === false && changeToken === false) {
    titleBar.innerHTML += `<span style='color: var(--blue-color);'> •</span>`
    changeToken = true
  } else if (graphNodes.same(cy.nodes()) === true && changeToken === true) {
    titleBar.innerHTML = titleBar.innerHTML.replace(' •', ' ')
    changeToken = false
  }
}

// watcher for changes in the edges
// const edges = (graphEdges, cy) => {
//   const titleBar = document.getElementById('title-bar-id')
//
//   if (
//     graphEdges.same(cy.edges()) === false &&
//     titleBar.innerText !== `${titleBar.innerHTML} *`
//   ) {
//     // add the files location to the title bar
//     titleBar.innerHTML += ` *`
//   } else if (graphEdges.same(cy.edges()) === false) {
//     titleBar.innerHTML = titleBar.innerHTML
//   } else {
//     titleBar.innerHTML = titleBar.innerHTML.replace(' *', ' ')
//   }
// }

/** checks for changes in the model before navigating to the index.js */
const closeNotification = () => {
  if (changeToken === true) {
    dialog.showMessageBox(
      {
        message: 'Do you want to navigate to the home  menu?',
        buttons: ['No', 'Yes']
      },
      response => {
        // is the response is Yes navigate to the index.html
        if (response === 1) {
          window.location.href = `file://${__dirname}/../index.html`
        }
      }
    )
    // when there no changes in the model navigate to index.html without prompting
  } else {
    window.location.href = `file://${__dirname}/../index.html`
  }
}

module.exports = {
  nodes,
  // edges,
  closeNotification
}
