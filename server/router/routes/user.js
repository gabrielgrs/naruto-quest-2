const component = 'user'

module.exports = [
  {
    component,
    method: 'post',
    path: `/${component}/register`,
    action: 'register'
  },
  {
    component,
    method: 'post',
    path: `/${component}/authenticate`,
    action: 'authenticate'
  },
  {
    component,
    method: 'get',
    path: `/${component}/getUserByToken`,
    action: 'getUserByToken'
  },
  // selectCharacter
  {
    component,
    method: 'put',
    path: `/${component}/selectCharacter`,
    action: 'selectCharacter'
  }
  // {
  //   component,
  //   method: 'get',
  //   path: `/${component}/getById/:id`,
  //   action: 'getById'
  // },
  // {
  //   component,
  //   method: 'post',
  //   path: `/${component}/create`,
  //   action: 'insert'
  // },
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
