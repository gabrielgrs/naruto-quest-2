import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, TextField, Row, Col } from '../../../components'
import { StyledContainer, StyledConductCode, StyledTitle } from './styles'
import { register } from '../../../redux/users'
import * as notify from '../../../helpers/notify'
import { paragraphs } from './helpers'

export default () => {
  const [readRules, setReadRules] = useState(false)
  const [fields, setFields] = useState({
    email: '',
    password: '',
    passwordConfirmation: ''
  })
  const dispatch = useDispatch()

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
      <StyledTitle> Registro </StyledTitle>
      <Row>
        <TextField
          label="E-mail"
          name="email"
          value={fields.email}
          onKeyDown={e => onKeyDown(e)}
          onChange={e => onChange(e)}
          fullWidth
        />
      </Row>
      <Row>
        <TextField
          label="Senha"
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
          label="Confirmação de Senha"
          type="password"
          name="passwordConfirmation"
          value={fields.passwordConfirmation}
          onChange={e => onChange(e)}
          fullWidth
        />
      </Row>
      <Row>
        <h2> Código de Conduta </h2>
        <StyledConductCode>
          {paragraphs.map(p => (
            <p>{p}</p>
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
            Li e aceito os termos de conduta préviamente descritos!
          </div>
        </Col>
      </Row>
      <Button
        simpleBorder
        isDisabled={!readRules}
        fullWidth
        onClick={() => onSubmit()}
      >
        Cadastrar
      </Button>
    </StyledContainer>
  )
}
