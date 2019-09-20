import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Page,
  Container,
  Row,
  Col,
  Button,
  ResourceNotFound,
  Tooltip
} from '../../../components'
import { getAll, clearState } from '../../../redux/quest'
import { enterInQuest, leaveFromQuest } from '../../../redux/characters'
import {
  StyledFilterButton,
  StyledCompletedQuests,
  StyledLeaveButton,
  StyledMissionCouter
} from './styles'
import { filters, canShowQuest, getRemainingTime } from './helpers'
import labels from '../../../config/labels'
import { leaveQuest } from '../../../redux/quest'

export default () => {
  const dispatch = useDispatch()
  const [questFilter, setQuestFilter] = useState('solo')
  const [inQuest, setInQuest] = useState(false)
  const [remainingQuestTime, setRemainingQuestTime] = useState(0)
  const [canFinishQuest, setCanFinishQuest] = useState(false)

  const { questsList, selectedCharacter } = useSelector(({ quest, user }) => {
    return {
      questsList: quest.questsList,
      ...user
    }
  })

  setTimeout(() => calculateRemainingTime(), 1000)

  const calculateRemainingTime = () => {
    // TODO: improve code
    if (selectedCharacter.currentQuest) {
      const remaingTime = getRemainingTime(selectedCharacter)

      const canFinish =
        String(remaingTime).includes('-') || String(remaingTime) === '0:00'

      if (selectedCharacter.currentQuest) setCanFinishQuest(canFinish)

      setRemainingQuestTime(remaingTime)
    }
  }

  useEffect(() => {
    return () => {
      dispatch(clearState())
    }
  }, [dispatch])

  useEffect(() => {
    if (!questsList.length) {
      dispatch(getAll())
    }
  }, [dispatch, questsList.length])

  useEffect(() => {
    setInQuest(!!selectedCharacter.currentQuest)
  }, [selectedCharacter.currentQuest])

  const onSelectQuest = quest => {
    dispatch(enterInQuest(quest, canFinish => setCanFinishQuest(canFinish)))
  }

  const onLeaveFromQuest = () => {
    dispatch(
      leaveFromQuest(() => {
        setInQuest(false)
      })
    )
  }

  const renderCompletedQuests = () => {
    const rankings = ['D', 'C', 'B', 'A', 'S']
    return (
      selectedCharacter &&
      selectedCharacter.completedQuests && (
        <>
          <h3>Quests Completadas</h3>
          {rankings.map((r, index) => (
            <div key={index}>
              <b>Rank {r}</b>: {selectedCharacter.completedQuests[r]}
            </div>
          ))}
        </>
      )
    )
  }

  const renderQuests = () => {
    // TODO: trazer missões de level igual ou inferior
    if (
      !questsList.length ||
      !questsList.filter(x => x.requiredLevel <= selectedCharacter.level).length
    ) {
      return <ResourceNotFound text="Nenhuma missão encontrada para você" />
    }

    return (
      <>
        <>
          {filters.map(
            (filter, index) =>
              filter.conditionToRender(selectedCharacter) && (
                <StyledFilterButton
                  key={index}
                  isDisabled={questFilter !== filter.name}
                  onClick={() => setQuestFilter(filter.name)}
                >
                  {filter.name}
                </StyledFilterButton>
              )
          )}
        </>

        {questsList.map(quest => {
          return (
            canShowQuest(selectedCharacter, quest, questFilter) && (
              <Row key={quest._id}>
                <Col sm={3}>
                  <img width="100%" src={quest.image} alt={quest.name} />
                </Col>
                <Col sm={5}>
                  <Row>
                    <b>{labels.quest}</b> {quest.name}
                  </Row>
                  <Row>
                    <b>Rank:</b> {quest.ranking}
                  </Row>
                  <Row>
                    <b>{labels.level} Recomendado</b>: {quest.requiredLevel}
                  </Row>
                  <Row>
                    <b>Recompensas: </b>
                    <div>
                      {labels.exp} {quest.exp}
                    </div>
                    <div>
                      {labels.gold} {quest.gold}
                    </div>
                  </Row>

                  <Row>
                    <b>Duração:</b> {quest.duration}{' '}
                    {quest.duration > 1 ? ' minutos' : ' minuto'}
                  </Row>
                </Col>
                <Col sm={4}>
                  <Button
                    fullWidth
                    onClick={() => onSelectQuest(quest)}
                    style={{ margin: '10' }}
                  >
                    Iniciar {labels.quest}
                  </Button>
                </Col>
              </Row>
            )
          )
        })}
      </>
    )
  }

  const renderCurrentQuest = () => {
    return (
      <Row inline>
        {!String(remainingQuestTime).includes('-') && (
          <Col sm={8}>
            <Tooltip text="Abandonar missão">
              <StyledLeaveButton onClick={() => dispatch(leaveQuest())}>
                X
              </StyledLeaveButton>
            </Tooltip>
            <StyledMissionCouter>
              Missão acabará em {remainingQuestTime}
            </StyledMissionCouter>
          </Col>
        )}
        <Col sm={4}>
          {canFinishQuest && (
            <Button onClick={() => onLeaveFromQuest()}>Concluir Missão</Button>
          )}
        </Col>
      </Row>
    )
  }

  return (
    <Page
      title="Missões"
      description="aqui você poderá realizar suas missões"
      representantImage="https://res.cloudinary.com/dbmnsavja/image/upload/v1567454394/Naruto%20Game/Chibis/Neji.png"
    >
      <Container>
        <StyledCompletedQuests>{renderCompletedQuests()}</StyledCompletedQuests>
        {!inQuest ? renderQuests() : renderCurrentQuest()}
      </Container>
    </Page>
  )
}
