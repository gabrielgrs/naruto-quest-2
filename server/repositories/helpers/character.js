const dynamicPopulate = model => {
  return model
    .populate({
      path: 'characters',
      populate: {
        path: 'selectedJob'
      }
    })
    .populate({
      path: 'selectedCharacter',
      populate: {
        path: 'skills'
      }
    })
    .populate({
      path: 'selectedCharacter',
      populate: {
        path: 'currentBattle',
        populate: {
          path: 'enemy'
        }
      }
    })
    .populate({
      path: 'selectedCharacter',
      populate: {
        path: 'selectedJob'
      }
    })
    .populate({
      path: 'selectedCharacter',
      populate: {
        path: 'items'
      }
    })
    .populate({
      path: 'selectedCharacter',
      populate: {
        path: 'equipments'
      }
    })
    .populate({
      path: 'selectedCharacter',
      populate: {
        path: 'bodyEquipments.weapon'
      }
    })
    .populate({
      path: 'selectedCharacter',
      populate: {
        path: 'bodyEquipments.head'
      }
    })
    .populate({
      path: 'selectedCharacter',
      populate: {
        path: 'bodyEquipments.trunk'
      }
    })
    .populate({
      path: 'selectedCharacter',
      populate: {
        path: 'bodyEquipments.arms'
      }
    })
    .populate({
      path: 'selectedCharacter',
      populate: {
        path: 'bodyEquipments.legs'
      }
    })
    .populate({
      path: 'selectedCharacter',
      populate: {
        path: 'bodyEquipments.feets'
      }
    })
    .populate({
      path: 'selectedCharacter',
      populate: {
        path: 'currentQuest'
      }
    })
    .populate({
      path: 'selectedCharacter',
      populate: {
        path: 'currentTeam',
        populate: {
          path: 'members'
        }
      }
    })
    .populate({
      path: 'selectedCharacter',
      populate: {
        path: 'currentTeam',
        populate: {
          path: 'owner'
        }
      }
    })
}

module.exports = {
  dynamicPopulate
}
