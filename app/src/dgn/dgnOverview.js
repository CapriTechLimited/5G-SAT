let output = ''

// stores the number of each node
const graphNodes = {
  actor: {
    numberOfNodes: 0
  },
  device: {
    numberOfNodes: 0
  },
  information: {
    numberOfNodes: 0
  },
  'data center': {
    numberOfNodes: 0
  },
  vnf: {
    numberOfNodes: 0
  },
  'malicious actor': {
    numberOfNodes: 0
  },
  asset: {
    numberOfNodes: 0
  },
  constraint: {
    numberOfNodes: 0
  },
  threat: {
    numberOfNodes: 0
  }
}

module.exports = function overview (cy) {
  const totalNodes = cy.elements().nodes().length
  output = `• nodes: ${totalNodes}\n\n`

  // count the number of nodes
  cy.nodes().map(node => {
    const nodeConcept = node.data().asto.concept
    // count the concept nodes
    Object.keys(graphNodes).map(concept => {
      if (nodeConcept === concept) {
        graphNodes[concept].numberOfNodes += 1
      }
    })
  })

  // compose the output by parsing the objects
  const composeOutput = (node, numberOfNodes) => {
    output += `• ${node}: ${numberOfNodes}\n`
  }

  // new line between modules and concepts
  output += `\n`
  Object.keys(graphNodes).map(node => {
    composeOutput(node, graphNodes[node].numberOfNodes)
  })

  // show result in the graph container
  const containerNode = document.getElementById('container-node-id')
  const containerNodeInfo = document.getElementById('container-node-info-id')
  // appends info to the div
  containerNode.style.display = 'block'
  containerNodeInfo.textContent = output
}
