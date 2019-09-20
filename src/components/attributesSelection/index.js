import React from 'react'
import styled from 'styled-components'
import { Row, Col, Button, Tooltip } from '../../components'
import labels from '../../config/labels'

const StyledAttributeLabel = styled.div`
  margin: 10px 0 10px 0;
  letter-spacing: 1px;
  background-color: ${({ theme, type }) => theme.colors[type]};
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.7em;
  text-align: center;
  padding: 3px;
  border-radius: 10px;
`

const StyledAttributeValue = styled.span`
  margin: 0 10px 0 10px;
`

export default ({ attributes, onDecreaseAttribute, onIncreaseAttribute }) => {
  const fields = [
    {
      type: 'success',
      property: 'attack'
    },
    {
      type: 'info',
      property: 'intelligence'
    },
    {
      type: 'warning',
      property: 'vitality'
    }
  ]

  return (
    <>
      <h3>Atributos</h3>
      {fields.map((field, index) => {
        return (
          <Row inline key={index}>
            <Col sm={4}>
              <Tooltip text={labels[field.property].description}>
                <StyledAttributeLabel type={field.type}>
                  {labels[field.property].name}
                </StyledAttributeLabel>
              </Tooltip>
            </Col>
            <Col sm={6}>
              <Button onClick={() => onDecreaseAttribute(field.property)}>
                -
              </Button>
              <StyledAttributeValue>
                {attributes[field.property]}
              </StyledAttributeValue>
              <Button onClick={() => onIncreaseAttribute(field.property)}>
                +
              </Button>
            </Col>
          </Row>
        )
      })}
    </>
  )
}
