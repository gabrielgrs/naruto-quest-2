import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Page, Row, Col, Button, TextField } from '../../../components'
import {
  createTeam,
  getAll,
  requestJoinTheTeam,
  clearState
} from '../../../redux/team'

export default () => {
  const dispatch = useDispatch()
  const [values, setValues] = useState({})
  const [creatingTeam, setCreatingTeam] = useState(false)

  const { selectedCharacter, teamsList } = useSelector(({ user, team }) => {
    return {
      ...user,
      ...team
    }
  })

  useEffect(() => () => dispatch(clearState()), [dispatch])

  useEffect(() => {
    if (!selectedCharacter.currentTeam && !teamsList.length) {
      dispatch(getAll())
    }
  }, [dispatch, selectedCharacter.currentTeam, teamsList.length])

  const onCreateTeam = () => dispatch(createTeam(values))

  const fields = [
    {
      label: 'Nome do Grupo',
      name: 'teamName',
      value: values.teamName
    }
  ]

  const onChange = ({ target }) =>
    setValues({ ...values, [target.name]: target.value })

  const renderField = ({ label, value, name }) => {
    return (
      <TextField
        key={label}
        onChange={onChange}
        label={label}
        value={value}
        name={name}
      />
    )
  }

  const onRequestJoinTheTeam = teamId => dispatch(requestJoinTheTeam(teamId))

  const renderTeams = () => {
    return teamsList.map(t => {
      return (
        <Row key={t._id}>
          <Col sm={9}>
            {t.name} - {t.members.length + 1} membros
          </Col>
          <Col sm={3}>
            {t.members.length + 1 < 3 && (
              <Button onClick={() => onRequestJoinTheTeam(t._id)}>
                Participar
              </Button>
            )}
          </Col>
        </Row>
      )
    })
  }

  const renderCurrentTeam = () => {
    const { _id, currentTeam } = selectedCharacter
    return (
      <>
        <Row>
          <h3>
            {_id === currentTeam.owner
              ? 'Você é o lider do time'
              : 'Time atual'}
          </h3>
          <Col sm={6}>
            <b>Nome do Time:</b> {currentTeam.name}
          </Col>
          <Col sm={6}>
            <b>Total de Membros:</b> {currentTeam.members.length + 1}
          </Col>
          <hr />
          <Col sm={12}>
            <b>Lider:</b> {currentTeam.owner.name}
          </Col>
          <Col sm={12}>
            {currentTeam.members.map(m => (
              <div key={m._id}>
                <b>Membro: </b>
                {m.name}
              </div>
            ))}
          </Col>
        </Row>
      </>
    )
  }

  return (
    <Page
      title="Times"
      description="Aqui você poderá fazer parte de um time"
      representantImage="https://res.cloudinary.com/dbmnsavja/image/upload/v1567454394/Naruto%20Game/Chibis/Gaara.png"
      helperText="Os times são divididos por vilas e os seus companheiros de time também ganharão experiência quando você ganhar!"
    >
      <Row>
        {selectedCharacter.currentTeam && renderCurrentTeam()}
        {!selectedCharacter.currentTeam && (
          <Col sm={12}>
            {creatingTeam ? (
              <Row>
                {fields.map(f => renderField(f))}
                <Col sm={7} />
                <Col sm={3}>
                  <Button noBorder onClick={() => setCreatingTeam(false)}>
                    Cancelar Criação
                  </Button>
                </Col>
                <Col sm={2}>
                  <Button fullWidth onClick={() => onCreateTeam()}>
                    Salvar
                  </Button>
                </Col>
              </Row>
            ) : (
              <Row>
                <Col sm={12}>
                  <Button onClick={() => setCreatingTeam(true)}>
                    Criar Time
                  </Button>
                </Col>
                <Col sm={12}>{renderTeams()}</Col>
              </Row>
            )}
          </Col>
        )}
      </Row>
    </Page>
  )
}
