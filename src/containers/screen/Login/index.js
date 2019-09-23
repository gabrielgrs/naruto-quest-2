import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, TextField, Row } from '../../../components'
import { StyledContainer, StyledTitle } from './styles'
import * as userActions from '../../../redux/users'
import * as notify from '../../../helpers/notify'
import texts from '../../../helpers/texts'

export default () => {
  const [fields, setFields] = useState({ email: '', password: '' })

  const dispatch = useDispatch()

  const { language } = useSelector(({ common }) => ({
    language: common.language
  }))

  const onSubmit = () => {
    const { email, password } = fields

    if (!email) {
      return notify.error('Preencha o e-mail')
    }

    if (!password) {
      return notify.error('Preencha a senha')
    }

    dispatch(userActions.authenticate(email, password))
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
      <StyledTitle> {texts.login.title[language]} </StyledTitle>
      <Row>
        <TextField
          label={texts.login.username.label[language]}
          placeholder={texts.login.username.placeholder[language]}
          name="email"
          value={fields.email}
          onKeyDown={e => onKeyDown(e)}
          onChange={e => onChange(e)}
          fullWidth
        />
      </Row>
      <Row>
        <TextField
          label={texts.login.password.label[language]}
          placeholder={texts.login.password.placeholder[language]}
          name="password"
          value={fields.password}
          type="password"
          onKeyDown={e => onKeyDown(e)}
          onChange={e => onChange(e)}
          fullWidth
        />
      </Row>
      <Button simpleBorder fullWidth onClick={() => onSubmit()}>
        {texts.login.submit[language]}
      </Button>
    </StyledContainer>
  )
}
