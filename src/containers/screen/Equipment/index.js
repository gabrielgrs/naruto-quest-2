import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Page, Row, Col, Image, Tooltip } from '../../../components'
import { setEquipment } from '../../../redux/characters'
import { renderEquipmentTooltip } from './helpers/render'
import styled from 'styled-components'

const StyledSlot = styled.div`
  cursor: default;
  border: ${({ hasEquipment }) => (hasEquipment ? null : 'dashed 2px black')};
  opacity: ${({ hasEquipment }) => (hasEquipment ? 1 : 0.5)};
  height: 80px;
  width: 80px;
  text-align: center;

  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;

  @media screen and (max-width: 720px) {
    width: 50px;
    height: 50px;
  }
`

const types = {
  weapon: 'Arma',
  head: 'Cabeça',
  trunk: 'Corpo',
  arms: 'Braços',
  legs: 'Pernas'
}

const Slot = ({ type, bodyEquipments }) => {
  if (!type || !bodyEquipments || !bodyEquipments[type]) {
    return <StyledSlot>{types[type]}</StyledSlot>
  }

  const currentEquipment = bodyEquipments[type]
  return (
    <StyledSlot hasEquipment>
      <Tooltip html={renderEquipmentTooltip(currentEquipment)}>
        <Image src={currentEquipment.image} />
      </Tooltip>
    </StyledSlot>
  )
}

export default () => {
  const dispatch = useDispatch()

  const { equipments, bodyEquipments } = useSelector(({ user }) => {
    return {
      equipments: user.selectedCharacter.equipments,
      bodyEquipments: user.selectedCharacter.bodyEquipments
    }
  })

  const onClickEquipment = equipment => {
    dispatch(setEquipment(equipment))
  }

  return (
    <Page title="Equipamentos" description="Suas armas e equipamentos">
      <Row>
        <Col sm={6}>
          <h3>Equipamentos Utilizados</h3>
          <>
            <Row inline>
              <Col sm={4} />
              <Col sm={4}>
                <Slot type="head" bodyEquipments={bodyEquipments} />
              </Col>
              <Col sm={4} />
            </Row>
            <Row inline>
              <Col sm={4}>
                <Slot type="arms" bodyEquipments={bodyEquipments} />
              </Col>
              <Col sm={4}>
                <Slot type="trunk" bodyEquipments={bodyEquipments} />
              </Col>
              <Col sm={4}>
                <Slot type="arms" bodyEquipments={bodyEquipments} />
              </Col>
            </Row>
            <Row inline>
              <Col sm={4}>
                <Slot type="legs" bodyEquipments={bodyEquipments} />
              </Col>
              <Col sm={4} />
              <Col sm={4}>
                <Slot type="legs" bodyEquipments={bodyEquipments} />
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <Slot type="weapon" bodyEquipments={bodyEquipments} />
              </Col>
            </Row>
          </>
        </Col>
        <Col sm={6}>
          <h3>Meus Equipamentos</h3>
          <Row>
            {equipments &&
              equipments.map(e => {
                return (
                  <Col key={e._id} sm={2}>
                    <Tooltip html={renderEquipmentTooltip(e)}>
                      <Image
                        onClick={() => onClickEquipment(e)}
                        src={e.image}
                      />
                    </Tooltip>
                  </Col>
                )
              })}
          </Row>
        </Col>
      </Row>
    </Page>
  )
}
