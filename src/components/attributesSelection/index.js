import React from 'react'
import styled from 'styled-components'
import { Row, Col, Button, Tooltip } from '../../components'
import texts from '../../helpers/texts'

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

export default ({
  attributes,
  onDecreaseAttribute,
  onIncreaseAttribute,
  language
}) => {
  const fields = [
    {
      type: 'success',
      property: 'attack',
      value: 'taijutsu'
    },
    {
      type: 'info',
      property: 'intelligence',
      value: 'ninjutsu'
    },
    {
      type: 'warning',
      property: 'vitality',
      value: 'genjutsu'
    }
  ]

  return (
    <>
      <h3>{texts.training.attribute[language]}</h3>
      {fields.map((field, index) => {
        return (
          <Row inline key={index}>
            <Col sm={4}>
              <Tooltip text={texts.training[field.value].tooltip[language]}>
                <StyledAttributeLabel type={field.type}>
                  {field.value}
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
