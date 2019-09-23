import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, TextField, Row, Col } from '../../../components'
import { StyledContainer, StyledConductCode, StyledTitle } from './styles'
import { register } from '../../../redux/users'
import * as notify from '../../../helpers/notify'
import { paragraphs } from './helpers'
import texts from '../../../helpers/texts'

export default () => {
  const [readRules, setReadRules] = useState(false)

  const [fields, setFields] = useState({
    email: '',
    password: '',
    passwordConfirmation: ''
  })

  const dispatch = useDispatch()

  const { language } = useSelector(({ common }) => ({
    language: common.language
  }))

  const onSubmit = async () => {
    const { email, password, passwordConfirmation } = fields

    if (!email) {
      return notify.error('Preencha o e-mail')
    }

    if (!password) {
      return notify.error('Preencha a senha')
    }

    if (password.length < 4) {
      return notify.error('Senha deve ter no mínimo 4 caracteres')
    }

    if (password !== passwordConfirmation) {
      return notify.error('Senhas devem ser iguais')
    }

    dispatch(register(email, password))
  }

  const onChange = ({ target }) => {
    setFields({ ...fields, [target.name]: target.value })
  }

  const onKeyDown = ({ keyCode }) => {
    if (+keyCode === 13) {
      onSubmit()
    }
  }

  return (
    <StyledContainer>
      <StyledTitle> {texts.register.title[language]} </StyledTitle>
      <Row>
        <TextField
          label={texts.register.username.label[language]}
          placeholder={texts.register.username.placeholder[language]}
          name="email"
          value={fields.email}
          onKeyDown={e => onKeyDown(e)}
          onChange={e => onChange(e)}
          fullWidth
        />
      </Row>
      <Row>
        <TextField
          label={texts.register.password.label[language]}
          placeholder={texts.register.password.placeholder[language]}
          type="password"
          name="password"
          value={fields.password}
          onKeyDown={e => onKeyDown(e)}
          onChange={e => onChange(e)}
          fullWidth
        />
      </Row>
      <Row>
        <TextField
          label={texts.register.passwordRepeat.label[language]}
          placeholder={texts.register.passwordRepeat.placeholder[language]}
          type="password"
          name="passwordConfirmation"
          value={fields.passwordConfirmation}
          onChange={e => onChange(e)}
          fullWidth
        />
      </Row>
      <Row>
        <h2> {texts.register.conductCode.title[language]} </h2>
        <StyledConductCode>
          {paragraphs.map(p => (
            <p>{p[language]}</p>
          ))}
        </StyledConductCode>
      </Row>
      <Row>
        <Col sm={1}>
          <input
            style={{ marginBotton: 10 }}
            onClick={() => setReadRules(!readRules)}
            type="checkbox"
          />
        </Col>
        <Col sm={11}>
          <div style={{ marginTop: 9 }}>
            {texts.register.conductCode.rulesAndAcceptment[language]}
          </div>
        </Col>
      </Row>
      <Button
        simpleBorder
        isDisabled={!readRules}
        fullWidth
        onClick={() => onSubmit()}
      >
        {texts.register.submit[language]}
      </Button>
    </StyledContainer>
  )
}
