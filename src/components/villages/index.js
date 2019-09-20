import React, { useState } from 'react'
import { villages } from '../../helpers/villages'
import { Col, Tooltip, Image } from '../'

export default ({ onChange }) => {
  const [selectedVillage, setSelectedVillage] = useState(undefined)

  const onSelectVillage = name => {
    setSelectedVillage(name)
    if (onChange) onChange(name)
  }

  return villages.map(({ name, label, image }) => {
    return (
      <Col sm={2}>
        <Tooltip text={label}>
          <Image
            hasGreyscale={name !== selectedVillage}
            isDisabled={name !== selectedVillage}
            onClick={() => onSelectVillage(name)}
            src={image}
          />
        </Tooltip>
      </Col>
    )
  })
}
