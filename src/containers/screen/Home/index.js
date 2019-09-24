import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Page, Container, Button } from '../../../components'
import { changeLanguage } from '../../../redux/common'
import texts from '../../../helpers/texts'

export default props => {
  const dispatch = useDispatch()

  const { language } = useSelector(({ common }) => ({
    ...common
  }))

  return (
    <Page
      title={texts.home.title[language]}
      description={texts.home.description[language]}
    >
      <Container>
        <h1>{texts.home.welcome[language]}</h1>
      </Container>
      {language === 'pt' ? (
        <Button onClick={() => dispatch(changeLanguage('us'))}>
          Change language to English
        </Button>
      ) : (
        <Button onClick={() => dispatch(changeLanguage('pt'))}>
          Alterar idioma para Português
        </Button>
      )}
    </Page>
  )
}
