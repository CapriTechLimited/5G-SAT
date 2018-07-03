// adds design phase edge types based on the source and target nodes

const bubbleTxt = require('../helpers/bubbleTxt.js')
const addEdge = require('../core/addEdge.js')

/**
 * add implementation phase edges
 *
 * @param {Object} cy cytoscape instance
 * @param {Object} srcNode source node
 * @param {Object} trgNode target node
 */
module.exports = function addComponent (cy, srcNode, trgNode) {
  let srcNodeId = srcNode.id
  let trgNodeId = trgNode.id
  let srcNodeCpt = srcNode.asto.concept
  let trgNodeCpt = trgNode.asto.concept

  switch (true) {
    case srcNodeCpt === 'actor' && trgNodeCpt === 'data center':
      addEdge(cy, srcNodeId, trgNodeId, 'uses')
      break
    case srcNodeCpt === 'actor' && trgNodeCpt === 'information':
      addEdge(cy, srcNodeId, trgNodeId, 'uses')
      break
    case srcNodeCpt === 'actor' && trgNodeCpt === 'device':
      addEdge(cy, srcNodeId, trgNodeId, 'uses')
      break
    case srcNodeCpt === 'malicious actor' && trgNodeCpt === 'data center':
      addEdge(cy, srcNodeId, trgNodeId, 'uses')
      break
    case srcNodeCpt === 'malicious actor' && trgNodeCpt === 'information':
      addEdge(cy, srcNodeId, trgNodeId, 'uses')
      break
    case srcNodeCpt === 'malicious actor' && trgNodeCpt === 'device':
      addEdge(cy, srcNodeId, trgNodeId, 'uses')
      break
    case srcNodeCpt === 'malicious actor' && trgNodeCpt === 'threat':
      addEdge(cy, srcNodeId, trgNodeId, 'poses')
      break
    case srcNodeCpt === 'data center' && trgNodeCpt === 'vnf':
      addEdge(cy, srcNodeId, trgNodeId, 'has')
      break
    case srcNodeCpt === 'vnf' && trgNodeCpt === 'information':
      addEdge(cy, srcNodeId, trgNodeId, 'uses')
      break
    case srcNodeCpt === 'device' && trgNodeCpt === 'information':
      addEdge(cy, srcNodeId, trgNodeId, 'uses')
      break
    case srcNodeCpt === 'device' && trgNodeCpt === 'data center':
      addEdge(cy, srcNodeId, trgNodeId, 'connected')
      break
    case srcNodeCpt === 'information' && trgNodeCpt === 'device':
      addEdge(cy, srcNodeId, trgNodeId, 'has')
      break
    case srcNodeCpt === 'asset' && trgNodeCpt === 'device':
      addEdge(cy, srcNodeId, trgNodeId, 'is')
      break
    case srcNodeCpt === 'asset' && trgNodeCpt === 'information':
      addEdge(cy, srcNodeId, trgNodeId, 'is')
      break
    case srcNodeCpt === 'asset' && trgNodeCpt === 'data center':
      addEdge(cy, srcNodeId, trgNodeId, 'is')
      break
    case srcNodeCpt === 'asset' && trgNodeCpt === 'vnf':
      addEdge(cy, srcNodeId, trgNodeId, 'is')
      break
    case srcNodeCpt === 'constraint' && trgNodeCpt === 'data center':
      addEdge(cy, srcNodeId, trgNodeId, 'imposes')
      break
    case srcNodeCpt === 'constraint' && trgNodeCpt === 'threat':
      addEdge(cy, srcNodeId, trgNodeId, 'protects')
      break
    case srcNodeCpt === 'threat' && trgNodeCpt === 'asset':
      addEdge(cy, srcNodeId, trgNodeId, 'targets')
      break
    default:
      bubbleTxt(`${srcNodeCpt} → ${trgNodeCpt}\nnot allowed 😔`)
  }
}
