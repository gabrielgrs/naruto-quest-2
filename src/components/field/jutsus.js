import React from 'react'
import styled from 'styled-components'
import { Col, Image, Tooltip } from '../'
import {
  getSkillStyle,
  getSkillType
} from '../../containers/screen/Field/helpers'
import labels from '../../config/labels'

export const StyledSkill = styled.div`
  position: relative;

  & > div {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.black};
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.7em;
    padding: ${({ isDisabled }) => (isDisabled ? '2px 5px 2px 5px' : null)};
    opacity: 0.4;
  }
`

export default ({
  selectedCharacter,
  selectedSkillToUse,
  setSelectedSkillToUse,
  onUseSkill
}) => {
  const renderSkillTooltip = ({ name, type, value, cost, delay, style }) => {
    return (
      <div>
        <div>{name}</div>
        <div>Estilo: {getSkillStyle(style).text}</div>
        <div>
          {getSkillType(type).text}: {value}
        </div>
        <div>
          {labels.mana}: {cost}
        </div>
        <div>
          Recarga: {delay} {delay > 1 ? 'Turnos' : 'Turno'}
        </div>
      </div>
    )
  }

  return (
    <>
      <h3>Meus Jutsus</h3>
      <div>
        {selectedCharacter.skills.map(skill => {
          const currentDelayedSkill = selectedCharacter.currentBattle.delayedSkills.find(
            x => +x.code === +skill.code
          )

          const cantUseSkill =
            !!currentDelayedSkill ||
            selectedCharacter.attributes.mana < skill.cost

          const isDisabled = +selectedSkillToUse !== +skill.code

          return (
            <Col style={{ width: '21%' }} key={skill._id} sm={2}>
              <Tooltip html={renderSkillTooltip(skill)}>
                <StyledSkill>
                  <Image
                    isDisabled={cantUseSkill || isDisabled}
                    canBeBlocked={cantUseSkill}
                    width="30"
                    src={skill.image}
                    onClick={() =>
                      !isDisabled
                        ? onUseSkill(skill)
                        : setSelectedSkillToUse(skill.code)
                    }
                    // onClick={() => onUseSkill(skill)}
                  />
                  <div>
                    {!!currentDelayedSkill &&
                      `Recarga: ${currentDelayedSkill.delay}`}
                  </div>
                </StyledSkill>
              </Tooltip>
            </Col>
          )
        })}
      </div>
    </>
  )
}
