import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Page, Row, Col, Image, Tooltip } from '../../../components'
import { setEquipment } from '../../../redux/characters'
import texts from '../../../helpers/texts'
import {
  StyledSlot,
  StyledCharacter,
  StyledHead,
  StyledTrunk,
  StyledLegs,
  StyledFeets,
  StyledArm,
  StyledWeapon
} from './styles'

const renderEquipmentTooltip = (equipment, language) => {
  if (!equipment) return null

  const { name, value, usageType } = equipment

  const { increaseType } = texts.equipments

  const getUsageType = type => {
    if (type === 'weapon')
      return { name: 'Arma', increase: increaseType.attack[language] }
    if (type === 'head')
      return { name: 'Cabeça', increase: increaseType.defense[language] }
    if (type === 'trunk')
      return { name: 'Corpo', increase: increaseType.defense[language] }
    if (type === 'arms')
      return { name: 'Braços', increase: increaseType.defense[language] }
    if (type === 'legs')
      return { name: 'Pernas', increase: increaseType.defense[language] }
    if (type === 'feets') {
      return { name: 'Pés', increase: increaseType.defense[language] }
    }

    return { name: type, increase: 'n/a' }
  }

  return (
    <div style={{ letterSpacing: '1px' }}>
      <b>{name}</b>
      <div>
        <b>{texts.equipments.type[language]}: </b>
        {getUsageType(usageType).name}
      </div>
      <div>
        <b>{texts.equipments.increase[language]}: </b>
        {value}
        {` ${language === 'pt' ? 'de' : 'of'} ${
          getUsageType(usageType).increase
        }`}
      </div>
    </div>
  )
}

const Slot = ({ type, bodyEquipments, language }) => {
  if (!type || !bodyEquipments || !bodyEquipments[type]) {
    const equipment = texts.equipments.characterParts[type]
    return <StyledSlot>{equipment[language]}</StyledSlot>
  }

  const currentEquipment = bodyEquipments[type]
  return (
    <StyledSlot hasEquipment>
      <Tooltip html={renderEquipmentTooltip(currentEquipment, language)}>
        <Image src={currentEquipment.image} />
      </Tooltip>
    </StyledSlot>
  )
}

export default () => {
  const dispatch = useDispatch()

  const { equipments, bodyEquipments, language } = useSelector(
    ({ user, common }) => {
      return {
        language: common.language,
        equipments: user.selectedCharacter.equipments,
        bodyEquipments: user.selectedCharacter.bodyEquipments
      }
    }
  )

  const onClickEquipment = equipment => {
    dispatch(setEquipment(equipment))
  }

  return (
    <Page
      title={texts.equipments.title[language]}
      description={texts.equipments.description[language]}
    >
      <Row>
        <Col sm={6}>
          <h3>{texts.equipments.utilizedEquipments[language]}</h3>
          <StyledCharacter>
            <img
              src="https://res.cloudinary.com/dbmnsavja/image/upload/v1569284785/Naruto%20Game/assets/NarutoBody.png"
              alt="char"
            />
            <StyledHead>
              <Slot
                language={language}
                type="head"
                bodyEquipments={bodyEquipments}
              />
            </StyledHead>
            <StyledArm>
              <Slot
                language={language}
                type="arms"
                bodyEquipments={bodyEquipments}
              />
            </StyledArm>
            <StyledTrunk>
              <Slot
                language={language}
                type="trunk"
                bodyEquipments={bodyEquipments}
              />
            </StyledTrunk>
            <StyledLegs>
              <Slot
                language={language}
                type="legs"
                bodyEquipments={bodyEquipments}
              />
            </StyledLegs>
            <StyledFeets>
              <Slot
                language={language}
                type="feets"
                bodyEquipments={bodyEquipments}
              />
            </StyledFeets>
            <StyledWeapon>
              <Slot
                language={language}
                type="weapon"
                bodyEquipments={bodyEquipments}
              />
            </StyledWeapon>
          </StyledCharacter>
        </Col>
        <Col sm={6}>
          <h3>{texts.equipments.myEquipments[language]}</h3>
          <Row>
            {equipments &&
              equipments.map(e => {
                return (
                  <Col key={e._id} sm={2}>
                    <Tooltip html={renderEquipmentTooltip(e, language)}>
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
