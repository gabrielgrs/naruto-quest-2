const component = 'team'

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
  },
  {
    component,
    method: 'post',
    path: `/${component}/requestJoinTheTeam`,
    action: 'requestJoinTheTeam'
  }
]
