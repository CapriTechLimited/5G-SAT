// design phase concept schema

const dgnMetamodel = {
  actorArray: ['data center', 'device', 'information'],
  deviceArray: ['actor', 'asset', 'information', 'data center'],
  informationArray: ['actor', 'device', 'data center'],
  dataCenterArray: ['actor', 'vnf', 'constraint', 'asset'],
  vnfArray: ['data center', 'asset', 'information'],
  constraintArray: ['data center', 'threat'],
  assetArray: ['device', 'information', 'data center', 'threat'],
  threatArray: ['asset', 'constraint', 'malicious actor'],
  maliciousActorArray: ['data center', 'device', 'information', 'threat']
}

dgnMetamodel.pairs = {
  actor: dgnMetamodel.actorArray,
  device: dgnMetamodel.deviceArray,
  iformation: dgnMetamodel.informationArray,
  'data center': dgnMetamodel.dataCenterArray,
  vnf: dgnMetamodel.vnfArray,
  constraint: dgnMetamodel.constraintArray,
  asset: dgnMetamodel.assetArray,
  threat: dgnMetamodel.threatArray,
  'malicious actor': dgnMetamodel.maliciousActorArray
}

module.exports = dgnMetamodel
