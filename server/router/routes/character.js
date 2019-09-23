const component = 'character'

module.exports = [
  {
    component,
    method: 'post',
    path: `/${component}/create`,
    action: 'insert'
  },
  {
    component,
    method: 'put',
    path: `/${component}/learnSkill/:characterId`,
    action: 'learnSkill',
    needAuthentication: true
  },
  {
    component,
    method: 'put',
    path: `/${component}/setAttributes/:characterId`,
    action: 'setAttributes',
    needAuthentication: true
  },
  {
    component,
    method: 'put',
    path: `/${component}/changeJob/:characterId`,
    action: 'changeJob',
    needAuthentication: true
  },
  {
    component,
    method: 'put',
    path: `/${component}/buyItem/:characterId`,
    action: 'buyItem',
    needAuthentication: true
  },
  {
    component,
    method: 'put',
    path: `/${component}/recoveryCharacter/:characterId`,
    action: 'recoveryCharacter',
    needAuthentication: true
  },
  {
    component,
    method: 'get',
    path: `/${component}/getRanking`,
    action: 'getRanking',
    needAuthentication: true
  },
  {
    component,
    method: 'put',
    path: `/${component}/enterInQuest`,
    action: 'enterInQuest',
    needAuthentication: true
  },
  {
    component,
    method: 'put',
    path: `/${component}/finishQuest`,
    action: 'finishQuest',
    needAuthentication: true
  },
  {
    component,
    method: 'put',
    path: `/${component}/leaveQuest`,
    action: 'leaveQuest',
    needAuthentication: true
  },
  {
    component,
    method: 'put',
    path: `/${component}/learnElement`,
    action: 'learnElement',
    needAuthentication: true
  },
  {
    component,
    method: 'put',
    path: `/${component}/setEquipment`,
    action: 'setEquipment',
    needAuthentication: true
  },
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
  {
    component,
    method: 'delete',
    path: `/${component}/removeCharacter/:id`,
    action: 'remove'
  }
]
