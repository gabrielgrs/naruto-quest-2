import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Page, Container, Button, Row, Col } from '../../../components'
import { changeLanguage } from '../../../redux/common'
import { news } from './helpers'
import texts from '../../../helpers/texts'

const StyledNews = styled.div`
  cursor: pointer;
  border: ${({ theme }) => `solid ${theme.colors.primary} 2px`};
  border-radius: 10px 0 10px 0;
  margin: 10px;

  & h4 {
    text-align: center;
  }

  & div {
    margin: 10px;
    display: ${({ isSelected }) => (isSelected ? 'initial' : 'none')};
  }
`

export default props => {
  const [selectedNew, setSelectedNew] = useState(undefined)
  const dispatch = useDispatch()

  const { language } = useSelector(({ common }) => ({
    ...common
  }))

  const onSelectNew = index => {
    if (selectedNew === index) {
      return setSelectedNew(undefined)
    }

    return setSelectedNew(index)
  }

  return (
    <Page
      title={texts.home.title[language]}
      description={texts.home.description[language]}
    >
      <Container>
        <h1>{texts.home.welcome[language]}</h1>
      </Container>
      <Row>
        <Col sm={6}>
          {language === 'pt' ? (
            <Button onClick={() => dispatch(changeLanguage('us'))}>
              Change language to English
            </Button>
          ) : (
            <Button onClick={() => dispatch(changeLanguage('pt'))}>
              Alterar idioma para Português
            </Button>
          )}
        </Col>
        <Col sm={6}>
          {news.map((n, index) => (
            <StyledNews
              onClick={() => onSelectNew(index)}
              isSelected={index === selectedNew}
            >
              <h4>
                {n.title} - {n.date}
              </h4>
              <div>{n.text}</div>
            </StyledNews>
          ))}
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <h3>Curta nossa página</h3>
          <a
            href="http://facebook.com/narutoquest"
            rel="noopener noreferrer"
            target="_BLANK"
          >
            www.facebook.com/narutoquest
          </a>
        </Col>
        <Col sm={4}>
          <h3>Entre em contato conosco</h3>
          <b>help@narutoquest.com</b>
        </Col>
      </Row>
    </Page>
  )
}
