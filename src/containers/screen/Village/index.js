import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Page, Row, Col, Container } from '../../../components'
import { StyledCard } from './styles'
import { getVillage } from '../../../helpers/villages'
import texts from '../../../helpers/texts'

const baseImage =
  'https://i.pinimg.com/originals/76/6e/a7/766ea71928066fae57db40db3cbba6b0.jpg'

export default () => {
  const { selectedCharacter, language } = useSelector(({ user, common }) => {
    return {
      ...user,
      language: common.language
    }
  })

  const getTitle = () => {
    if (!selectedCharacter.village) return ''

    if (language === 'us') {
      return `${selectedCharacter.village} Village`
    }

    return `Vila da ${getVillage(selectedCharacter.village).label}`
  }

  return (
    <Page
      title={getTitle()}
      description={
        !selectedCharacter.village
          ? undefined
          : texts.village.description[language]
      }
      representantImage="https://res.cloudinary.com/dbmnsavja/image/upload/v1567454394/Naruto%20Game/Chibis/Sai.png"
      helperText={texts.village.helperText[language]}
    >
      <Container>
        <Row>
          <Col sm={4}>
            <h3>{texts.village.battlefield.title[language]}</h3>
            <Link to="/field">
              <StyledCard>
                <img
                  src="https://res.cloudinary.com/dbmnsavja/image/upload/v1567016421/entrance_wryv1v.png"
                  alt={texts.village.battlefield.title[language]}
                />
              </StyledCard>
            </Link>
          </Col>
          <Col sm={4}>
            <h3>{texts.village.shop.title[language]}</h3>
            <Link to="/shop">
              <StyledCard>
                <img src={baseImage} alt={texts.village.shop.title[language]} />
              </StyledCard>
            </Link>
          </Col>
          <Col sm={4}>
            <h3>{texts.village.hospital.title[language]}</h3>
            <Link to="/hospital">
              <StyledCard>
                <img
                  src="https://res.cloudinary.com/dbmnsavja/image/upload/v1567016421/hospital_g4dqev.png"
                  alt={texts.village.hospital.title[language]}
                />
              </StyledCard>
            </Link>
          </Col>
        </Row>
      </Container>
    </Page>
  )
}
