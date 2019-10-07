import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Page, Row, Col, Button, TextField } from '../../../components'
import {
  StyledChatPanel,
  StyledWrapper,
  StyledMessage,
  StyledMessageText,
  StyledDateMessage,
  StyledSenderName,
  StyledSenderLevel
} from './styles'
import { getAll, sendMessage } from '../../../redux/message'
import texts from '../../../helpers/texts'
import { format } from 'date-fns'

export default () => {
  const [isSendingMessage, setIsSendingMessage] = useState(false)
  const dispatch = useDispatch()

  const [message, setMessage] = useState()
  const { messageList, selectedCharacter, language } = useSelector(
    ({ message, user, common }) => {
      return {
        language: common.language,
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
    if (!messageList.length)
      return <h2>{texts.chat.notFoundMessages[language]}</h2>

    return messageList.map((m, index) => (
      <Row key={index}>
        {!!m.sender && (
          <StyledMessage
            fromGM={m.sender.name.includes('[GM]')}
            fromUser={m.sender._id === selectedCharacter._id}
          >
            <Row>
              <Col sm={2}>
                <Row>
                  <StyledSenderName>{m.sender.name}</StyledSenderName>
                </Row>
                <Row>
                  <StyledSenderLevel>Level {m.sender.level}</StyledSenderLevel>
                </Row>
                <Row>
                  <StyledDateMessage>
                    {format(new Date(m.createdAt), 'DD/MM/YYYY HH:mm')}
                  </StyledDateMessage>
                </Row>
              </Col>
              <Col sm={10}>
                <StyledMessageText>{m.text}</StyledMessageText>
              </Col>
            </Row>
          </StyledMessage>
        )}
      </Row>
    ))
  }

  return (
    <Page
      title={texts.chat.title[language]}
      description={texts.chat.description[language]}
    >
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
              isDisabled={isSendingMessage || !message}
              fullWidth
              onClick={() => onSendMessage()}
            >
              {isSendingMessage
                ? texts.chat.sendingMessage[language]
                : texts.chat.sendMessage[language]}
            </Button>
          </Col>
        </Row>
      </StyledWrapper>
    </Page>
  )
}
