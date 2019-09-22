const component = 'map'

module.exports = [
  {
    component,
    method: 'get',
    path: `/${component}/getMap`,
    action: 'getMap'
  },
  {
    component,
    method: 'get',
    path: `/${component}/getFullMap`,
    action: 'getFullMap'
  },
  {
    component,
    method: 'get',
    path: `/${component}/generateMap`,
    action: 'generateMap'
  }
]
