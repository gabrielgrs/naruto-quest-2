const battleRepository = require('../repositories/battle')
const characterReponsitory = require('../repositories/character')
const authService = require('./auth')

const findBattle = (characterId, pvpList) => {
  const oponent = pvpList.find(x => x._id != characterId)
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
        if (oponent) {
          await createBattle(selectedCharacterId, oponent._id)
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
