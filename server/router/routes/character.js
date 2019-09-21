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
    action: 'learnSkill'
  },
  {
    component,
    method: 'put',
    path: `/${component}/setAttributes/:characterId`,
    action: 'setAttributes'
  },
  {
    component,
    method: 'put',
    path: `/${component}/changeJob/:characterId`,
    action: 'changeJob'
  },
  {
    component,
    method: 'put',
    path: `/${component}/buyItem/:characterId`,
    action: 'buyItem'
  },
  {
    component,
    method: 'put',
    path: `/${component}/recoveryCharacter/:characterId`,
    action: 'recoveryCharacter'
  },
  {
    component,
    method: 'get',
    path: `/${component}/getRanking`,
    action: 'getRanking'
  },
  {
    component,
    method: 'put',
    path: `/${component}/enterInQuest`,
    action: 'enterInQuest'
  },
  {
    component,
    method: 'put',
    path: `/${component}/finishQuest`,
    action: 'finishQuest'
  },
  {
    component,
    method: 'put',
    path: `/${component}/leaveQuest`,
    action: 'leaveQuest'
  },
  {
    component,
    method: 'put',
    path: `/${component}/learnElement`,
    action: 'learnElement'
  },
  {
    component,
    method: 'put',
    path: `/${component}/setEquipment`,
    action: 'setEquipment'
  },
  {
    component,
    method: 'put',
    path: `/${component}/moveCharacter`,
    action: 'moveCharacter'
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
