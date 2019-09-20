import React from 'react'
import { useSelector } from 'react-redux'
import { Page, Row, Col, Tooltip, Image } from '../../../components'

export default () => {
  const { selectedCharacter } = useSelector(({ user }) => {
    return {
      ...user
    }
  })

  return (
    <Page title="Mochila" description="Seus itens aqui">
      <Row>
        {selectedCharacter.items &&
          selectedCharacter.items.map(({ _id, item }) => {
            return (
              <Col key={_id} sm={1}>
                <Tooltip text={`${item.description}`}>
                  <Image width="30" src={item.image} />
                </Tooltip>
              </Col>
            )
          })}
      </Row>
    </Page>
  )
}
