import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Page, Container, Row, Col } from '../../../components'
import { news } from './helpers'
import texts from '../../../helpers/texts'

const StyledNews = styled.div`
  cursor: pointer;
  border-left: ${({ theme }) => `solid ${theme.colors.primary} 3px`};
  background: ${({ theme }) => theme.colors.white};
  border-radius: 0px 5px 5px 0px;
  margin: 5px 10px;
  padding: 5px 3px;

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
          <h3>Notícias</h3>
          {news.map((n, index) => (
            <StyledNews
              key={index}
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
      <hr />
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
          <b style={{ letterSpacing: 1 }}>help@narutoquest.com</b>
        </Col>
      </Row>
    </Page>
  )
}
