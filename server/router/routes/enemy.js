const component = 'enemy'

module.exports = [
  {
    component,
    method: 'get',
    path: `/${component}/getAll`,
    action: 'getAll',
    needAuthentication: true
  },
  {
    component,
    method: 'get',
    path: `/${component}/getById/:id`,
    action: 'getById',
    needAuthentication: true
  },
  {
    component,
    method: 'post',
    path: `/${component}/create`,
    action: 'insert'
  }
  // {
  //   component,
  //   method: 'put',
  //   path: `/${component}/update/:id`,
  //   action: 'update'
  // },
  // {
  //   component,
  //   method: 'delete',
  //   path: `/${component}/remove/:id`,
  //   action: 'remove'
  // }
]
