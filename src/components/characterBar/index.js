import React from 'react'

import { Col, Image, ProgressBar, Row } from '..'
import {
  StyledWrapper,
  StyledName,
  StyledActionButtons,
  StyledLink,
  StyledAvatar,
  StyledGold
} from './styles'
import labels from '../../config/labels'
import { getVillage } from '../../helpers/villages'
import { getNinjaRank } from '../../helpers/ninjaRankings'
import { getExpToNextLevel } from '../../helpers/rules'

export default ({ selectedCharacter }) => {
  const {
    name,
    attributes,
    level,
    gold,
    exp,
    stats,
    village,
    ninjaRank
  } = selectedCharacter

  return name ? (
    <StyledWrapper>
      <Row>
        <Col sm={12}>
          <StyledName>
            {name}
            <div>
              {getNinjaRank(ninjaRank).label} da Vila da{' '}
              {getVillage(village).label}
            </div>
          </StyledName>
        </Col>
        <Col sm={12}>
          <StyledAvatar>
            <Image hasOutline src={selectedCharacter.selectedJob.image} />
            <div>
              {labels.level} {level}
            </div>
          </StyledAvatar>
        </Col>
        <Col sm={12}>
          <StyledActionButtons>
            {/* <StyledLink to="/treinamento">Treinamento</StyledLink> */}
            <StyledLink to="/equipamentos">Equipamentos</StyledLink>

            <StyledLink to="/mochila">Mochila</StyledLink>

            <StyledLink to="/personagens">personagens</StyledLink>

            <StyledLink to="/vip">Sala VIP</StyledLink>
          </StyledActionButtons>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <ProgressBar
            label={labels.life}
            color="green"
            current={attributes.life}
            max={stats.maxLife}
          />
          <ProgressBar
            label={labels.mana}
            color="blue"
            current={attributes.mana}
            max={stats.maxMana}
          />
          <div>
            <Col sm={4}>
              <StyledGold>
                {gold || 0} {labels.gold}
              </StyledGold>
            </Col>
            <Col sm={8}>
              <ProgressBar
                label={labels.exp}
                color="black"
                current={exp}
                max={getExpToNextLevel(level)}
              />
              <ProgressBar
                label={labels.stamina}
                color="red"
                current={attributes.stamina}
                max={stats.maxStamina}
              />
            </Col>
          </div>
        </Col>
      </Row>
    </StyledWrapper>
  ) : null
}
