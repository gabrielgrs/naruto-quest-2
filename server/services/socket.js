const battleRepository = require('../repositories/battle')
const characterReponsitory = require('../repositories/character')
const authService = require('./auth')

const findBattle = ({ selectedCharacterId }, pvpList) => {
  const oponent = pvpList.find(
    x => x.selectedCharacterId != selectedCharacterId
  )
  return oponent
}

const createBattle = async (characterId, oponentId) => {
  const battle = await battleRepository.insert({
    character: characterId,
    oponent: oponentId
  })
  await characterReponsitory.enterInBattle(characterId, battle._id)
  await characterReponsitory.enterInBattle(oponentId, battle._id)
  return battle
}

function manipulateSocket(socket, io, socketInfos) {
  console.log(`${socket.id} connected`)

  socket.on('searchBattle', async userInfo => {
    try {
      const { level, selectedCharacterId } = await authService.decodeToken(
        userInfo.token
      )
      if (userInfo.stopSearch) {
        socketInfos.usersWaitingForPVP = socketInfos.usersWaitingForPVP.filter(
          x => x._id != selectedCharacterId
        )
      } else {
        socketInfos.usersWaitingForPVP.push({
          selectedCharacterId,
          level,
          token: userInfo.token
        })
        const oponent = findBattle(
          { selectedCharacterId, level },
          socketInfos.usersWaitingForPVP
        )
        // console.log('info', selectedCharacterId)
        if (oponent) {
          await createBattle(selectedCharacterId, oponent.selectedCharacterId)
          io.emit('foundBattle', {
            characterToken: userInfo.token,
            oponentToken: oponent.token
          })
        }
      }
    } catch (error) {
      console.log(error)
    }
  })
}

module.exports = {
  manipulateSocket
}
