import React from 'react'
import { useSelector } from 'react-redux'
import { Page, Container } from '../../../components'
import texts from '../../../helpers/texts'

export default () => {
  const { language } = useSelector(({ common }) => ({ ...common }))

  return (
    <Page
      title={texts.home.title[language]}
      description={texts.home.description[language]}
    >
      <Container>
        <h1>{texts.home.welcome[language]}</h1>
      </Container>
    </Page>
  )
}
