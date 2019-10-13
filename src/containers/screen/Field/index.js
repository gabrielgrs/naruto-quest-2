import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Page, Row, Col, Button, Tooltip } from '../../../components'
import { getAll, clearState as clearEnemysState } from '../../../redux/enemies'
import {
  enterInBattle,
  battleAction,
  clearState as clearBattleState,
  leaveBattle
} from '../../../redux/battle'

import { EnemiesList } from '../../../components/field'
import Battle from '../../../components/battle'
import { differenceInSeconds } from 'date-fns'

export default () => {
  const [timeToEndTurn, setTimeToEndTurn] = useState(undefined)
  const [selectedSkillToUse, setSelectedSkillToUse] = useState(undefined)
  const [selectedItemToUse, setSelectedItemToUse] = useState(undefined)
  const [characterLevel, setCharacterLevel] = useState(0)
  const [lastActionIsAttack, setLastActionIsAttack] = useState(undefined)
  const [selectedEnemyId, setSelectedEnemyId] = useState(undefined)
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
    if (!!selectedCharacter.currentBattle) {
      const difference = differenceInSeconds(
        new Date(selectedCharacter.currentBattle.lastCharacterAction),
        new Date()
      )

      return setTimeToEndTurn(difference)
    }
  }, [selectedCharacter, setTimeToEndTurn, timeToEndTurn])

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

  const onEnterInBattle = () => {
    setUserInBattle(true)
    const selectedEnemy = enemiesList.find(x => +x.code === +selectedEnemyId)
    dispatch(enterInBattle(selectedCharacter, selectedEnemy))
  }

  const onUseSkill = skill => {
    setLastActionIsAttack(true)
    dispatch(battleAction(selectedCharacter.currentBattle._id, skill))
  }

  const onUseItem = item => {
    setLastActionIsAttack(false)
    dispatch(battleAction(selectedCharacter.currentBattle._id, item))
  }

  const canShowBattle = () => {
    return (
      selectedCharacter &&
      selectedCharacter.inBattle &&
      selectedCharacter.currentBattle
    )
  }

  return (
    <Page
      title="Campo"
      description="Batalhe contra monstros"
      returnPath="/village"
      hiddenLoader={selectedCharacter.inBattle}
      representantImage="https://res.cloudinary.com/dbmnsavja/image/upload/v1567454394/Naruto%20Game/Chibis/Kisame.png"
      helperText="Escolha algum inimigo para treinar, clique duas vezes nele ou selecione e clique para entrar na batalha"
    >
      {!userInBattle && (
        <>
          <Row>
            <EnemiesList
              list={enemiesList || []}
              selectedEnemyId={selectedEnemyId}
              setSelectedEnemyId={setSelectedEnemyId}
              onEnterInBattle={onEnterInBattle}
            />
          </Row>
          <Row>
            <Col sm={12}>
              <Tooltip
                text={
                  selectedCharacter.skills && !selectedCharacter.skills.length
                    ? 'Necessário aprender habilidade'
                    : ''
                }
              >
                <Button
                  isDisabled={selectedEnemyId === undefined}
                  onClick={() => onEnterInBattle()}
                >
                  Entrar na batalha
                </Button>
              </Tooltip>
            </Col>
          </Row>
        </>
      )}

      {canShowBattle() && (
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
