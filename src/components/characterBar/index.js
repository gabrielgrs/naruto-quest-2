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
    <Row>
      <Col sm={3}></Col>
      <Col sm={6}>
        <StyledWrapper>
          <Row>
            <Col sm={12}>
              <Col sm={5}>
                <StyledName>
                  {name}
                  <div>
                    {getNinjaRank(ninjaRank).label} da Vila da{' '}
                    {getVillage(village).label}
                  </div>
                </StyledName>
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
              <Col sm={4}>
                <StyledAvatar>
                  <Image hasOutline src={selectedCharacter.selectedJob.image} />
                  <div>
                    {labels.level} {level}
                  </div>
                </StyledAvatar>
              </Col>
              <Col sm={3}>
                <StyledActionButtons>
                  {/* <StyledLink to="/treinamento">Treinamento</StyledLink> */}
                  <StyledLink to="/equipments">Equipamentos</StyledLink>

                  <StyledLink to="/bag">Mochila</StyledLink>

                  <StyledLink to="/characters">personagens</StyledLink>

                  <StyledLink to="/vip">Sala VIP</StyledLink>
                </StyledActionButtons>
              </Col>
            </Col>
          </Row>
        </StyledWrapper>
      </Col>
      <Col sm={3}></Col>
    </Row>
  ) : null
}
