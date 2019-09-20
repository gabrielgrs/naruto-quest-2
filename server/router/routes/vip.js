const component = 'vip'

module.exports = [
  {
    component,
    method: 'post',
    path: `/${component}/resetAttributes`,
    action: 'resetAttributes'
  },
  {
    component,
    method: 'post',
    path: `/${component}/resetJutsus`,
    action: 'resetJutsus'
  },
  {
    component,
    method: 'post',
    path: `/${component}/changeName`,
    action: 'changeName'
  },
  {
    component,
    method: 'post',
    path: `/${component}/changeVillage`,
    action: 'changeVillage'
  },
  {
    component,
    method: 'post',
    path: `/${component}/addCharacterSlot`,
    action: 'addCharacterSlot'
  },
  {
    component,
    method: 'post',
    path: `/${component}/buyRyous`,
    action: 'buyRyous'
  },
  {
    component,
    method: 'post',
    path: `/${component}/recoveryStamina`,
    action: 'recoveryStamina'
  },
  {
    component,
    method: 'post',
    path: `/${component}/recoveryStatus`,
    action: 'recoveryStatus'
  }
]
