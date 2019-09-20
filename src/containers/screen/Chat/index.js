import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Page, Row, Col, Button, TextField } from '../../../components'
import { StyledChatPanel, StyledWrapper, StyledMessage } from './styles'
import { getAll, sendMessage } from '../../../redux/message'

export default () => {
  const [isSendingMessage, setIsSendingMessage] = useState(false)
  const dispatch = useDispatch()

  const [message, setMessage] = useState()
  const { messageList, selectedCharacter } = useSelector(
    ({ message, user }) => {
      return {
        ...user,
        messageList: message.messageList
      }
    }
  )

  const scrollToBottom = () => {
    const panel = document.getElementById('panel')
    if (panel) panel.scrollTop = panel.scrollHeight - panel.clientHeight
  }

  useEffect(() => {
    if (!messageList.length) {
      dispatch(
        getAll(() => {
          setTimeout(() => scrollToBottom(), 1000)
        })
      )
      // TODO: change to socket
      setInterval(() => dispatch(getAll()), 10000)
    }
  }, [dispatch, messageList.length])

  const onSendMessage = () => {
    setIsSendingMessage(true)
    const receiver = undefined
    dispatch(
      sendMessage({ message, receiver }, () => {
        setMessage('')
        dispatch(getAll(() => scrollToBottom()))
        setIsSendingMessage(false)
      })
    )
  }

  const renderMessages = () => {
    if (!messageList.length) return <h2>Nenhuma mensagem encontrada</h2>

    return messageList.map((m, index) => (
      <Row key={index}>
        {!!m.sender && (
          <StyledMessage fromUser={m.sender._id === selectedCharacter._id}>
            <b>{m.sender.name} - </b>
            {m.text}
          </StyledMessage>
        )}
      </Row>
    ))
  }

  return (
    <Page title="Chat" description="Converse com o pessoal aqui!">
      <StyledWrapper>
        <Row>
          <Col sm={12}>
            <StyledChatPanel id="panel">{renderMessages()}</StyledChatPanel>
          </Col>
        </Row>
        <Row css="position: absolute; bottom: 0;">
          <Col sm={10}>
            <TextField
              value={message}
              fullWidth
              onKeyDown={e => {
                if (e.keyCode === 13) {
                  return onSendMessage()
                }
              }}
              onChange={({ target }) => setMessage(target.value)}
            />
          </Col>
          <Col sm={2}>
            <Button
              isDisabled={isSendingMessage}
              fullWidth
              onClick={() => onSendMessage()}
            >
              {isSendingMessage ? 'Enviando...' : 'Enviar Mensagem'}
            </Button>
          </Col>
        </Row>
      </StyledWrapper>
    </Page>
  )
}
