import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Page, Row, Button, Col } from '../../../components'
import { recoveryCharacter } from '../../../redux/characters'

export default () => {
  const dispatch = useDispatch()

  const { selectedCharacter } = useSelector(({ user }) => {
    return { ...user }
  })

  const onRecoveryCharacter = () => {
    dispatch(recoveryCharacter())
  }

  const characterIsDead =
    selectedCharacter.attributes && selectedCharacter.attributes.life < 1

  const recoveryCost = characterIsDead ? 0 : selectedCharacter.level * 10

  return (
    <Page
      title="Hospital"
      description="Recupera sua vida e Chakra"
      returnPath="/village"
      representantImage="https://res.cloudinary.com/dbmnsavja/image/upload/v1567454395/Naruto%20Game/Chibis/Sakura.png"
    >
      <Row>
        <Col sm={4}>
          <Button
            isDisabled={selectedCharacter.gold < recoveryCost}
            fullWidth
            onClick={() => onRecoveryCharacter()}
          >
            {characterIsDead
              ? `Reviva seu personagem`
              : `Recupere seu personagem por ${recoveryCost} Ryous`}
          </Button>
        </Col>
      </Row>
    </Page>
  )
}
