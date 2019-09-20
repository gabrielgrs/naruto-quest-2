const component = 'battle'

module.exports = [
  {
    component,
    method: 'post',
    path: `/${component}/enterInBattle`,
    action: 'enterInBattle'
  },
  {
    component,
    method: 'put',
    path: `/${component}/battleAction/:battleId`,
    action: 'battleAction'
  },
  {
    component,
    method: 'put',
    path: `/${component}/leaveBattle`,
    action: 'leaveBattle'
  }
]
