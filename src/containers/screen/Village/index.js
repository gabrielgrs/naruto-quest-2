import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Page, Row, Col, Container } from '../../../components'
import { StyledCard } from './styles'
import { getVillage } from '../../../helpers/villages'

const baseImage =
  'https://i.pinimg.com/originals/76/6e/a7/766ea71928066fae57db40db3cbba6b0.jpg'

export default () => {
  const { selectedCharacter } = useSelector(({ user }) => {
    return {
      ...user
    }
  })

  return (
    <Page
      title={
        selectedCharacter.village &&
        `Vila da ${getVillage(selectedCharacter.village).label}`
      }
      description="Se aventure pela Vila"
      representantImage="https://res.cloudinary.com/dbmnsavja/image/upload/v1567454394/Naruto%20Game/Chibis/Sai.png"
      helperText="Escolha entre as missões, loja ou hospital!"
    >
      <Container>
        <Row>
          <Col sm={4}>
            <h3>Missões</h3>
            <Link to="/missoes">
              <StyledCard>
                <img
                  src="https://res.cloudinary.com/dbmnsavja/image/upload/v1567016421/entrance_wryv1v.png"
                  alt="Missões"
                />
              </StyledCard>
            </Link>
          </Col>
          <Col sm={4}>
            <h3>Lojas</h3>
            <Link to="loja">
              <StyledCard>
                <img src={baseImage} alt="Lojas" />
              </StyledCard>
            </Link>
          </Col>
          <Col sm={4}>
            <h3>Hospital</h3>
            <Link to="hospital">
              <StyledCard>
                <img
                  src="https://res.cloudinary.com/dbmnsavja/image/upload/v1567016421/hospital_g4dqev.png"
                  alt="hospital"
                />
              </StyledCard>
            </Link>
          </Col>
        </Row>
      </Container>
    </Page>
  )
}
