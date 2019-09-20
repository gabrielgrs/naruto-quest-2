import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Page, Row, Button, Col } from '../../../components'
import { recoveryCharacter } from '../../../redux/characters'
import { recoveries } from './helpers'
export default () => {
  const dispatch = useDispatch()

  const { selectedCharacter } = useSelector(({ user }) => {
    return { ...user }
  })

  const onRecoveryCharacter = recoveryType => {
    dispatch(recoveryCharacter(selectedCharacter._id, recoveryType))
  }

  return (
    <Page
      title="Hospital"
      description="Recupera sua vida e Chakra"
      returnPath="/vila"
      representantImage="https://res.cloudinary.com/dbmnsavja/image/upload/v1567454395/Naruto%20Game/Chibis/Sakura.png"
    >
      <Row>
        {recoveries.map(r => (
          <Col sm={4}>
            <Button
              isDisabled={selectedCharacter.gold < r.cost}
              fullWidth
              onClick={() => onRecoveryCharacter(r.type)}
            >
              {r.name} - {r.cost} Ryous
            </Button>
          </Col>
        ))}
      </Row>
    </Page>
  )
}
