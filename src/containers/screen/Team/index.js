import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Page, Row, Col, Button, TextField } from '../../../components'
import {
  createTeam,
  getAll,
  requestJoinTheTeam,
  clearState
} from '../../../redux/team'
import texts from '../../../helpers/texts'

export default () => {
  const dispatch = useDispatch()
  const [values, setValues] = useState({})
  const [creatingTeam, setCreatingTeam] = useState(false)

  const { selectedCharacter, teamsList, language } = useSelector(
    ({ user, team, common }) => {
      return {
        language: common.language,
        ...user,
        ...team
      }
    }
  )

  useEffect(() => () => dispatch(clearState()), [dispatch])

  useEffect(() => {
    if (!selectedCharacter.currentTeam && !teamsList.length) {
      dispatch(getAll())
    }
  }, [dispatch, selectedCharacter.currentTeam, teamsList.length])

  const onCreateTeam = () => dispatch(createTeam(values))

  const fields = [
    {
      label: texts.team.name,
      name: 'teamName',
      value: values.teamName
    }
  ]

  const onChange = ({ target }) =>
    setValues({ ...values, [target.name]: target.value })

  const renderField = ({ label, value, name }) => {
    return (
      <TextField
        key={label[language]}
        onChange={onChange}
        label={label[language]}
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
            {t.name} - {t.members.length + 1} {texts.team.members[language]}
          </Col>
          <Col sm={3}>
            {t.members.length + 1 < 3 && (
              <Button onClick={() => onRequestJoinTheTeam(t._id)}>
                {texts.team.participate[language]}
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
            <b>{texts.team.name[language]}</b> {currentTeam.name}
          </Col>
          <Col sm={6}>
            <b>{texts.team.members[language]}</b>{' '}
            {currentTeam.members.length + 1}
          </Col>
          <hr />
          <Col sm={12}>
            <b>{texts.team.leader[language]}: </b> {currentTeam.owner.name}
          </Col>
          <Col sm={12}>
            {currentTeam.members.map(m => (
              <div key={m._id}>
                <b>{texts.team.member[language]}: </b>
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
      title={texts.team.title[language]}
      description={texts.team.description[language]}
      representantImage="https://res.cloudinary.com/dbmnsavja/image/upload/v1567454394/Naruto%20Game/Chibis/Gaara.png"
      helperText={texts.team.helperText[language]}
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
                    {texts.team.cancelCreation[language]}
                  </Button>
                </Col>
                <Col sm={2}>
                  <Button fullWidth onClick={() => onCreateTeam()}>
                    {texts.team.createTeam[language]}
                  </Button>
                </Col>
              </Row>
            ) : (
              <Row>
                <Col sm={12}>
                  <Button onClick={() => setCreatingTeam(true)}>
                    {texts.team.createTeam[language]}
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
