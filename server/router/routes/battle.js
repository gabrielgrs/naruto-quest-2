const component = 'battle'

module.exports = [
  {
    component,
    method: 'post',
    path: `/${component}/enterInBattle`,
    action: 'enterInBattle',
    needAuthentication: true
  },
  {
    component,
    method: 'put',
    path: `/${component}/battleAction/:battleId`,
    action: 'battleAction',
    needAuthentication: true
  },
  {
    component,
    method: 'put',
    path: `/${component}/leaveBattle`,
    action: 'leaveBattle',
    needAuthentication: true
  }
]
