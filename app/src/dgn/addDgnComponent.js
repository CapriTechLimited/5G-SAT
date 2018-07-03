/**
 * adds implementation phase components in the graph
 * @todo needs refactoring
 *
 * @param {Object} cy cytoscape instance
 * @param {Object} event captured mouse event
 * @param {number} nodeCounter id counter for nodes
 */
module.exports = function addDgnComponent (cy, event, nodeCounter) {
  // get mouse position on click
  // display new node on the left of the menu
  let posX = event.x + 50
  let posY = event.y - 30

  // get the selected concept
  let component = event.target.textContent

  switch (component) {
    case 'actor':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            actorType: '',
            concept: 'actor'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    case 'device':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            concept: 'device'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    case 'information':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            concept: 'information'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    case 'data center':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            dcType: '',
            concept: 'data center'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    case 'vnf':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            vnfType: '',
            concept: 'vnf'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    case 'constraint':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            concept: 'constraint'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    case 'asset':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            concept: 'asset'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    case 'threat':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            category: '',
            concept: 'threat'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    case 'malicious actor':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            concept: 'malicious actor'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    default:
      console.error('error in addDgnComponent.js')
  }
}
