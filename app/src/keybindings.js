// keybindings

const config = require('../settings/config.js')

const searchAttribute = require('./core/searchAttribute.js')
const showMetamodel = require('./core/showMetamodel.js')
const deleteRestoreConcepts = require('./core/deleteRestoreConcepts.js')

const printChatHTML = require('./helpers/printChatHTML.js')
const save = require('./helpers/save.js')
const theme = require('./helpers/theme.js')

const phaseHelpers = require('./buttonHelpers.js')

module.exports = function (
  cy,
  selectedNode,
  selectedEdge,
  srcNode,
  trgNode,
  phase
) {
  // help menu for macOs
  const helpMenuMacOS = `• focus on console: ⌘L
• add Edge: ⌘E
• delete element: ⌘⌫
• restore node: ⌘Z
• save as: ⇧⌘S
• view phase metamodel: <b>metamodel</b>
• change color theme: <b>toggle</b>
• clear sidebar: <b>clear</b>
• model overview: <b>overview</b>
• model validation: <b>validate</b>
• search for attributes: <b>keyword</b>`

  // help menu for Linux and Windows
  const helpMenu = `• focus on console: ctrl+L
• add Edge: ctrl+E
• delete element: ctrl+backspace
• restore node: ctrl+Z
• save as: shift+ctrl+S
• view phase metamodel: <b>metamodel</b>
• change color theme: <b>toggle</b>
• clear sidebar: <b>clear</b>
• model overview: <b>overview</b>
• model validation: <b>validate</b>
• search for attributes: <b>keyword</b>`

  // adds the url of the github wiki
  const wikiURLButton = `click to view <button id='url-button' class='startButtons' style='color: var(--main-tx-color); background-color: var(--main-bg-color); width: 40px; height: 25px;'>wiki</button>`

  const consoleId = document.getElementById('console-id')
  const labelId = document.getElementById('input-label-id')
  // indicate focus on console
  consoleId.addEventListener('focus', e => {
    labelId.style.color = config.blue
  })
  consoleId.addEventListener('blur', () => {
    labelId.style.color = config.text
  })

  // loses the focus from the console when tapping
  cy.on('tap', selection => consoleId.blur())

  // console commands
  const commands = () => {
    const input = document.getElementById('console-id').value
    document.getElementById('console-id').value = ''

    switch (input) {
      case 'help':
        // checks the platform to display the help menu
        process.platform === 'darwin'
          ? printChatHTML(helpMenuMacOS)
          : printChatHTML(helpMenu)

        printChatHTML(wikiURLButton)
        // opens the wiki page with the default browser
        document.getElementById('url-button').addEventListener('click', () => {
          require('electron').shell.openExternal(config.wikiUrl)
        })
        break
      case 'overview':
        phaseHelpers.overviewHelper(cy, phase)
        break
      case 'validate':
        phaseHelpers.validateHelper(cy, phase)
        break
      case 'metamodel':
        showMetamodel(phase)
        break
      case 'toggle':
        if (config.colorTheme === 'dark') {
          theme.setThemeGraph(cy, 'light')
          config.colorTheme = 'light'
        } else {
          theme.setThemeGraph(cy, 'dark')
          config.colorTheme = 'dark'
        }
        break
      case '':
        break
      case 'clear':
        document.getElementById('info-nodes-id').textContent = ''
        break
      default:
        searchAttribute(cy, input)
    }
  }

  // keydown listeners
  document.addEventListener('keydown', event => {
    let key = ''
    // checks the platform to assign the correct meta key
    process.platform === 'darwin'
      ? (key = event.metaKey)
      : (key = event.ctrlKey)

    // focus on consoleId
    if (key === true && event.code === 'KeyL') {
      consoleId.focus()
    }

    // add edge
    if (key === true && event.code === 'KeyE') {
      // checks for undefined selections
      if (Object.keys(srcNode.out).length !== 0) {
        phaseHelpers.addEdge(cy, srcNode.out, trgNode.out, phase)
        cy.edges().addClass('label-edges')
      }
    }

    // delete nodes or edges with meta + Backspace
    if (key === true && event.code === 'Backspace') {
      deleteRestoreConcepts.deleteConcept(
        cy,
        selectedNode.out,
        selectedEdge.out
      )
    }

    // restore elements with meta + z
    if (key === true && event.code === 'KeyZ') {
      deleteRestoreConcepts.restoreNode(cy)
    }

    // save graph on meta + s
    if (event.shiftKey === true && key === true && event.code === 'KeyS') {
      save(cy)
    }

    // listens for the ENTER key when focus is on the console
    if (document.activeElement === consoleId && event.code === 'Enter') {
      commands()
    }
  })
}
