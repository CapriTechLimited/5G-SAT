/**
 * highlights all the nodes of a specific module
 *
 * @param {Object} cy cytoscape instance
 * @param {any} selection user selection
 */
module.exports = function moduleSelection (cy, selection) {
  // grouping of the module components
  let groupArray = []
  const networkArray = [
    'device',
    'network connection',
    'micronet',
    'net',
    'information',
    'application',
    'thing'
  ]
  const securityArray = [
    'asset',
    'threat',
    'vulnerability',
    'mechanism',
    'constraint',
    'malicious actor'
  ]
  const socialArray = ['actor']
  const sensingArray = [
    'sensor',
    'event sensor',
    'report sensor',
    'control sensor'
  ]

  switch (selection) {
    case 'network':
      groupArray = networkArray
      break
    case 'security':
      groupArray = securityArray
      break
    case 'social':
      groupArray = socialArray
      break
    case 'sensing':
      groupArray = sensingArray
      break
    case 'network-security':
      groupArray = networkArray.concat(securityArray)
      break
    case 'network-sensing':
      groupArray = networkArray.concat(sensingArray)
      break
    case 'security-sensing':
      groupArray = securityArray.concat(sensingArray)
      break
    case 'network-social':
      groupArray = networkArray.concat(socialArray)
      break
    case '':
      groupArray = []
      break
    default:
      console.error('error in moduleSelection.js')
  }

  cy.elements().addClass('faded')

  let totalNodes = 0
  // removes the faded class from the selected nodes
  // and adds them to node count
  cy.nodes().map(node => {
    const nodeConcept = node.data().asto.concept
    if (groupArray.includes(nodeConcept) === true) {
      node.removeClass('faded')
      totalNodes += 1
    }
  })

  const htmlElement = document.getElementById('legend-id')
  htmlElement.textContent = `${selection} nodes: ${totalNodes}`
}
