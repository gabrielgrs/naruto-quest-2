import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SocketIO from 'socket.io-client'
import { serverUrl } from '../../../config/enviroments'
import { getAll, clearState as clearEnemysState } from '../../../redux/enemies'
import {
  battleAction,
  clearState as clearBattleState,
  leaveBattle
} from '../../../redux/battle'

import { Page, Button } from '../../../components'
import Battle from '../../../components/battle'

export default () => {
  const token = localStorage.getItem('token')
  const [isInBattle, setIsInBattle] = useState(false)
  const [socket, setSocket] = useState(undefined)
  const [searchingBattle, setSearchingBattle] = useState(false)

  // const [timeToEndTurn, setTimeToEndTurn] = useState(undefined)
  const [selectedSkillToUse, setSelectedSkillToUse] = useState(undefined)
  const [selectedItemToUse, setSelectedItemToUse] = useState(undefined)
  const [characterLevel, setCharacterLevel] = useState(0)
  const [lastActionIsAttack, setLastActionIsAttack] = useState(undefined)
  const [userInBattle, setUserInBattle] = useState(false)
  const dispatch = useDispatch()

  const {
    enemiesList,
    loadingBattle,
    selectedCharacter,
    battleResolver
  } = useSelector(({ enemies, user, battle }) => {
    return {
      enemiesList: enemies.list,
      ...battle,
      ...user
    }
  })

  useEffect(() => {
    return () => {
      dispatch(clearBattleState())
      dispatch(clearEnemysState())
    }
  }, [dispatch])

  useEffect(() => {
    if (!enemiesList.length) dispatch(getAll())
  }, [dispatch, enemiesList.length])

  useEffect(() => {
    if (selectedCharacter.level) {
      setCharacterLevel(selectedCharacter.level)
    }

    if (!!characterLevel && selectedCharacter.level !== characterLevel) {
      dispatch(getAll())
    }
  }, [selectedCharacter.level, characterLevel, dispatch])

  useEffect(() => {
    if (userInBattle !== selectedCharacter.inBattle) {
      if (!userInBattle) {
        setLastActionIsAttack(undefined)
        setSelectedSkillToUse(undefined)
      }
      setUserInBattle(selectedCharacter.inBattle)
    }
  }, [selectedCharacter.inBattle, userInBattle, dispatch])

  const onLeaveBattle = () => dispatch(leaveBattle())

  const onUseSkill = skill => {
    setLastActionIsAttack(true)
    dispatch(battleAction(selectedCharacter.currentBattle._id, skill))
  }

  const onUseItem = item => {
    setLastActionIsAttack(false)
    dispatch(battleAction(selectedCharacter.currentBattle._id, item))
  }

  const manipulateSocket = useCallback(
    socket => {
      socket.on('foundBattle', res => {
        if (res.characterToken === token || res.oponentToken === token) {
          setIsInBattle(true)
        }
      })
    },
    [token]
  )

  useEffect(() => {
    if (!socket) {
      setSocket(SocketIO(serverUrl))
    } else {
      manipulateSocket(socket)
    }
    return () => () => setSocket(undefined)
  }, [socket, manipulateSocket])

  const onSearchBattle = toSearch => {
    setSearchingBattle(toSearch)
    socket.emit('searchBattle', {
      stopSearch: !toSearch,
      token
    })
  }

  return (
    <Page title="Areana" description="Batalhe contra outros jogadores">
      <Button onClick={() => onSearchBattle(!searchingBattle)}>
        {searchingBattle ? 'Cancelar Procurar' : 'Procurar Batalha'}
      </Button>
      {isInBattle &&
        selectedCharacter.currentBattle &&
        (selectedCharacter.enemy || selectedCharacter.oponent)(
          <Battle
            selectedCharacter={selectedCharacter}
            onUseItem={onUseItem}
            onUseSkill={onUseSkill}
            lastActionIsAttack={lastActionIsAttack}
            loadingBattle={loadingBattle}
            battleResolver={battleResolver}
            selectedSkillToUse={selectedSkillToUse}
            setSelectedSkillToUse={setSelectedSkillToUse}
            selectedItemToUse={selectedItemToUse}
            setSelectedItemToUse={setSelectedItemToUse}
            onLeaveBattle={onLeaveBattle}
          />
        )}
    </Page>
  )
}
