import React from 'react'
import { Col, Tooltip, Image } from '../'

export default ({
  list,
  selectedEnemyId,
  setSelectedEnemyId,
  onEnterInBattle
}) => {
  return list.map(item => {
    const isDisabled = +item.code !== +selectedEnemyId
    return (
      <Col key={item._id} sm={2}>
        <Tooltip text={`${item.name} level ${item.level}`}>
          <Image
            key={item._id}
            onClick={() =>
              !isDisabled ? onEnterInBattle() : setSelectedEnemyId(+item.code)
            }
            isDisabled={isDisabled}
            src={item.image}
          />
        </Tooltip>
      </Col>
    )
  })
}
