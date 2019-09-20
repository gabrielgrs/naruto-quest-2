const equipments = require('./equipments/equipments')
const weapons = require('./equipments/weapons')

const list = [...equipments, ...weapons]

const generateEquipments = () =>
  list.map((equip, index) => ({ code: index, ...equip }))

module.exports = {
  equipments: generateEquipments()
}
