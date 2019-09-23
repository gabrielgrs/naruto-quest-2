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
import texts from '../../helpers/texts'

export default ({ language, selectedCharacter }) => {
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
                    {language === 'pt'
                      ? `${getNinjaRank(ninjaRank).label} - 'Vila da'
                    ${getVillage(village).label}`
                      : `${getNinjaRank(ninjaRank).label} - ${
                          getVillage(village).label
                        } Village`}
                  </div>
                </StyledName>
                <ProgressBar
                  label={texts.characterBar.life[language]}
                  color="green"
                  current={attributes.life}
                  max={stats.maxLife}
                />
                <ProgressBar
                  label={texts.characterBar.chakra[language]}
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
                      label={texts.characterBar.exp[language]}
                      color="black"
                      current={exp}
                      max={getExpToNextLevel(level)}
                    />
                    <ProgressBar
                      label={texts.characterBar.stamina[language]}
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
                  <StyledLink to="/equipments">
                    {texts.characterBar.equipments[language]}
                  </StyledLink>

                  <StyledLink to="/bag">
                    {texts.characterBar.bag[language]}
                  </StyledLink>

                  <StyledLink to="/characters">
                    {texts.characterBar.characters[language]}
                  </StyledLink>

                  <StyledLink to="/vip">
                    {texts.characterBar.vipRoom[language]}
                  </StyledLink>
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
