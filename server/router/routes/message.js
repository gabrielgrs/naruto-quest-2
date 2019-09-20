const component = 'message'

module.exports = [
  {
    component,
    method: 'get',
    path: `/${component}/getAll`,
    action: 'getAll'
  },
  {
    component,
    method: 'post',
    path: `/${component}/sendMessage`,
    action: 'insert'
  }
]
