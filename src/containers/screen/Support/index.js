import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from '../../../api'
import styled from 'styled-components'
import {
  Page,
  Container,
  TextField,
  Row,
  Col,
  Button
} from '../../../components'
import * as notify from '../../../helpers/notify'

const StyledMessage = styled.div`
  display: flex;
  text-align: center;
  font-size: 2em;
  font-weight: 600;
  letter-spacing: 2px;
`

export default () => {
  const { email } = useSelector(({ user }) => {
    return {
      isAuthenticated: user.isAuthenticated,
      email: user.email
    }
  })

  const [values, setValues] = useState({
    message: ''
  })

  const onSendMessage = async () => {
    try {
      await axios.post('/base/sendMessage', {
        subject: `Contato - ${email}`,
        from: 'app',
        toSupport: true,
        ...values
      })
      notify.success('Mensagem enviada com sucesso! Obrigado!')
      setValues({ message: '' })
    } catch (error) {
      console.log(error)
      notify.error('Falha ao enviar a mensagem')
    }
  }

  return (
    <Page title="Suporte" description="Ajuda e contato">
      <Container>
        <StyledMessage>Jogo em fase Alpha</StyledMessage>
      </Container>
      <Container>
        <h3>
          Ficou com alguma dúvida? Tem alguma sugestão? Sentiu falto de algo?
          Mande sua mensagem que entraremos em contato pelo e-mail da sua conta!
        </h3>
        <Row>
          <Col sm={8}>
            <TextField
              fullWidth
              placeholder="Mensagem"
              name="message"
              value={values.message}
              onChange={({ target }) =>
                setValues({ ...values, [target.name]: target.value })
              }
            />
          </Col>
          <Col sm={4}>
            <Button fullWidth onClick={() => onSendMessage()}>
              Enviar
            </Button>
          </Col>
        </Row>
      </Container>
    </Page>
  )
}
