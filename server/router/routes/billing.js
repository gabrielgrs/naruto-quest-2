const component = 'billing'

module.exports = [
  {
    component,
    method: 'get',
    path: `/${component}/getAll`,
    action: 'getAll'
  }
]
