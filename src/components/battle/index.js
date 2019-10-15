import React from 'react'
import { Row, Col, Container, Image, ProgressBar, Tooltip } from '../'
import {
  StyledAttackEffect,
  StyledAttackEffectReverse,
  StyledDamage,
  StyledLeaveButton
} from './styles'
import { FieldJutsus, FieldItems } from '../field'

export default ({
  selectedCharacter,
  onLeaveBattle,
  onUseItem,
  onUseSkill,
  lastActionIsAttack,
  loadingBattle,
  battleResolver,
  selectedSkillToUse,
  setSelectedSkillToUse,
  selectedItemToUse,
  setSelectedItemToUse
}) => {
  const { enemy, currentEnemyLife, ...battle } = selectedCharacter.currentBattle

  debugger
  if (!battle.oponent && !enemy) return null
  const isPvp = !!battle.oponent

  const oponent =
    battle.character._id === selectedCharacter._id
      ? battle.oponent
      : battle.character

  return (
    <Container>
      {/* <Row style={{ textAlign: 'center' }}>{timeToEndTurn}</Row> */}
      <Row>
        <Col sm={10} />
        <Col sm={2}>
          <Tooltip text="Abandonar batalha">
            <StyledLeaveButton onClick={() => onLeaveBattle()}>
              X
            </StyledLeaveButton>
          </Tooltip>
        </Col>
        <Col sm={4}>
          <Row>
            <Col sm={5}>
              {loadingBattle ||
              lastActionIsAttack === undefined ||
              !lastActionIsAttack ? (
                <Image src={selectedCharacter.selectedJob.image} isSelected />
              ) : (
                <StyledAttackEffect>
                  <Image src={selectedCharacter.selectedJob.image} isSelected />
                </StyledAttackEffect>
              )}
            </Col>
            <Col sm={7}>
              <div>
                <b>Name:</b> {selectedCharacter.name}
              </div>
              <div>
                <b>Level:</b> {selectedCharacter.level}
              </div>
            </Col>
          </Row>
          <Row>
            <ProgressBar
              current={selectedCharacter.attributes.life}
              max={selectedCharacter.stats.maxLife}
              label="HP"
              color="green"
            />
            <ProgressBar
              current={selectedCharacter.attributes.mana}
              max={selectedCharacter.stats.maxMana}
              label="HP"
              color="blue"
            />
          </Row>
        </Col>

        {battleResolver &&
        !loadingBattle &&
        !!selectedCharacter.currentBattle.log.length ? (
          <>
            <Col sm={2}>
              <StyledDamage>{battleResolver.enemyDamage}</StyledDamage>
            </Col>
            <Col sm={2}>
              {lastActionIsAttack && (
                <StyledDamage>{battleResolver.characterDamage}</StyledDamage>
              )}
            </Col>
          </>
        ) : (
          <Col sm={4} />
        )}

        <Col sm={4}>
          <Row>
            <Col sm={7}>
              <div>
                <b>Name:</b> {isPvp ? oponent.name : enemy.name}
              </div>
              <div>
                <b>Level:</b> {isPvp ? oponent.level : enemy.level}
              </div>
            </Col>
            <Col sm={5}>
              {loadingBattle ||
              lastActionIsAttack === undefined ||
              !lastActionIsAttack ? (
                <Image
                  src={isPvp ? oponent.selectedJob.image : enemy.image}
                  isSelected
                />
              ) : (
                <StyledAttackEffectReverse>
                  <Image
                    src={isPvp ? oponent.selectedJob.image : enemy.image}
                    isSelected
                  />
                </StyledAttackEffectReverse>
              )}
            </Col>
          </Row>
          <Row>
            {/* TODO: validate enemy max life */}
            <ProgressBar
              current={isPvp ? oponent.attributes.life : currentEnemyLife}
              max={
                isPvp ? oponent.stats.maxLife : enemy.attributes.vitality * 10
              }
              label="HP"
              color="green"
            />
          </Row>
        </Col>
      </Row>

      <Row>
        <Container>
          <Col sm={6}>
            <Row inline wrap>
              <FieldJutsus
                selectedCharacter={selectedCharacter}
                selectedSkillToUse={selectedSkillToUse}
                setSelectedSkillToUse={setSelectedSkillToUse}
                onUseSkill={onUseSkill}
              />
            </Row>
          </Col>
          <Col sm={6}>
            <Row>
              <FieldItems
                items={selectedCharacter.items || []}
                stats={selectedCharacter.stats}
                attributes={selectedCharacter.attributes}
                onUseItem={onUseItem}
                selectedItemToUse={selectedItemToUse}
                setSelectedItemToUse={setSelectedItemToUse}
              />
            </Row>
          </Col>
        </Container>
      </Row>
    </Container>
  )
}
