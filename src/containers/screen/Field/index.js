import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Page,
  Row,
  Col,
  Container,
  Image,
  ProgressBar,
  Tooltip
} from '../../../components'
import { getAll, clearState as clearEnemysState } from '../../../redux/enemies'
import {
  battleAction,
  clearState as clearBattleState,
  leaveBattle
} from '../../../redux/battle'
import {
  StyledAttackEffect,
  StyledAttackEffectReverse,
  StyledDamage,
  StyledSkill,
  StyledLeaveButton
} from './styles'
import { getSkillStyle, getSkillType } from './helpers'
import labels from '../../../config/labels'

export default () => {
  // const [showLogs, setShowLogs] = useState(false)
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

  // const renderLog = log => {
  //   return (
  //     <StyledLog>
  //       {log.map(log => {
  //         return (
  //           <StyledLogRow
  //             isUser={selectedCharacter._id === log.who}
  //             key={log._id}
  //           >
  //             {log.description}
  //           </StyledLogRow>
  //         )
  //       })}
  //     </StyledLog>
  //   )
  // }

  const renderSkillTooltip = ({ name, type, value, cost, delay, style }) => {
    return (
      <div>
        <div>{name}</div>
        <div>Estilo: {getSkillStyle(style).text}</div>
        <div>
          {getSkillType(type).text}: {value}
        </div>
        <div>
          {labels.mana}: {cost}
        </div>
        <div>
          Recarga: {delay} {delay > 1 ? 'Turnos' : 'Turno'}
        </div>
      </div>
    )
  }

  const renderItemTooltip = (life, mana) => {
    if (!!life && !mana)
      return (
        <div>
          <b>Vida:</b> {life}
        </div>
      )

    if (!life && !!mana)
      return (
        <div>
          <b>Chakra:</b> {mana}
        </div>
      )

    return (
      <>
        <div>
          <b>Vida:</b> {life}
        </div>
        <div>
          <b>Chakra:</b> {mana}
        </div>
      </>
    )
  }

  return (
    <Page
      title="Campo"
      description="Batalhe contra monstros"
      hiddenLoader={selectedCharacter.inBattle}
      representantImage="https://res.cloudinary.com/dbmnsavja/image/upload/v1567454394/Naruto%20Game/Chibis/Kisame.png"
      helperText="Escolha algum inimigo para treinar, clique duas vezes nele ou selecione e clique para entrar na batalha"
    >
      {canShowBattle() && (
        <Container>
          <Row>
            <Col sm={10} />
            <Col sm={2}>
              <Tooltip text="Abandonar batalha">
                <StyledLeaveButton onClick={() => dispatch(leaveBattle())}>
                  X
                </StyledLeaveButton>
              </Tooltip>
            </Col>
            <Col sm={4}>
              <Row>
                <Col sm={5}>
                  {loadingBattle ||
                  lastActionIsAttack === undefined ||
                  !lastActionIsAttack ? (
                    <Image
                      src={selectedCharacter.selectedJob.image}
                      isSelected
                    />
                  ) : (
                    <StyledAttackEffect>
                      <Image
                        src={selectedCharacter.selectedJob.image}
                        isSelected
                      />
                    </StyledAttackEffect>
                  )}
                </Col>
                <Col sm={7}>
                  <div>
                    <b>Name:</b> {selectedCharacter.name}
                  </div>
                  <div>
                    <b>Level:</b> {selectedCharacter.level}
                  </div>
                </Col>
              </Row>
              <Row>
                <ProgressBar
                  current={selectedCharacter.attributes.life}
                  max={selectedCharacter.stats.maxLife}
                  label="HP"
                  color="green"
                />
                <ProgressBar
                  current={selectedCharacter.attributes.mana}
                  max={selectedCharacter.stats.maxMana}
                  label="HP"
                  color="blue"
                />
              </Row>
            </Col>

            {battleResolver &&
            !loadingBattle &&
            !!selectedCharacter.currentBattle.log.length ? (
              <>
                <Col sm={2}>
                  <StyledDamage>{battleResolver.enemyDamage}</StyledDamage>
                </Col>
                <Col sm={2}>
                  {lastActionIsAttack && (
                    <StyledDamage>
                      {battleResolver.characterDamage}
                    </StyledDamage>
                  )}
                </Col>
              </>
            ) : (
              <Col sm={4} />
            )}

            <Col sm={4}>
              <Row>
                <Col sm={7}>
                  <div>
                    <b>Name:</b> {selectedCharacter.currentBattle.enemy.name}
                  </div>
                  <div>
                    <b>Level:</b> {selectedCharacter.currentBattle.enemy.level}
                  </div>
                </Col>
                <Col sm={5}>
                  {loadingBattle ||
                  lastActionIsAttack === undefined ||
                  !lastActionIsAttack ? (
                    <Image
                      src={selectedCharacter.currentBattle.enemy.image}
                      isSelected
                    />
                  ) : (
                    <StyledAttackEffectReverse>
                      <Image
                        src={selectedCharacter.currentBattle.enemy.image}
                        isSelected
                      />
                    </StyledAttackEffectReverse>
                  )}
                </Col>
              </Row>
              <Row>
                {/* TODO: validate enemy max life */}
                <ProgressBar
                  current={selectedCharacter.currentBattle.currentEnemyLife}
                  max={
                    selectedCharacter.currentBattle.enemy.attributes.vitality *
                    10
                  }
                  label="HP"
                  color="green"
                />
              </Row>
            </Col>
          </Row>

          <Row>
            <Container>
              <Col sm={6}>
                Meus ataques
                <Row inline wrap>
                  {selectedCharacter.skills.map(skill => {
                    const currentDelayedSkill = selectedCharacter.currentBattle.delayedSkills.find(
                      x => +x.code === +skill.code
                    )

                    const cantUseSkill =
                      !!currentDelayedSkill ||
                      selectedCharacter.attributes.mana < skill.cost

                    const isDisabled = +selectedSkillToUse !== +skill.code

                    return (
                      <Col style={{ width: '21%' }} key={skill._id} sm={2}>
                        <Tooltip html={renderSkillTooltip(skill)}>
                          <StyledSkill>
                            <Image
                              isDisabled={cantUseSkill || isDisabled}
                              canBeBlocked={cantUseSkill}
                              width="30"
                              src={skill.image}
                              onClick={() =>
                                !isDisabled
                                  ? onUseSkill(skill)
                                  : setSelectedSkillToUse(skill.code)
                              }
                              // onClick={() => onUseSkill(skill)}
                            />
                            <div>
                              {!!currentDelayedSkill &&
                                `Recarga: ${currentDelayedSkill.delay}`}
                            </div>
                          </StyledSkill>
                        </Tooltip>
                      </Col>
                    )
                  })}
                </Row>
              </Col>
              <Col sm={6}>
                Meus itens
                <Row>
                  {selectedCharacter.items.map(item => {
                    const { stats, attributes } = selectedCharacter

                    const isDisabled =
                      (attributes.life >= stats.maxLife &&
                        attributes.mana >= stats.maxMana) ||
                      +item.code !== selectedItemToUse

                    return (
                      <Col key={item._id} sm={2}>
                        <Tooltip
                          html={renderItemTooltip(
                            item.lifeRecovery,
                            item.manaRecovery
                          )}
                        >
                          <Image
                            isDisabled={isDisabled}
                            width="30"
                            src={item.image}
                            onClick={() =>
                              isDisabled
                                ? setSelectedItemToUse(item.code)
                                : onUseItem(item)
                            }
                          />
                        </Tooltip>
                      </Col>
                    )
                  })}
                </Row>
              </Col>
            </Container>
          </Row>
        </Container>
      )}
    </Page>
  )
}
