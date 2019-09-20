const component = 'skill'

module.exports = [
  {
    component,
    method: 'get',
    path: `/${component}/getAll`,
    action: 'getAll'
  },
  {
    component,
    method: 'get',
    path: `/${component}/getById/:id`,
    action: 'getById'
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
