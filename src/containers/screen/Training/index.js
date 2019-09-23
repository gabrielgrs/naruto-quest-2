import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import {
  Page,
  Row,
  Tooltip,
  Col,
  AttributesSelection,
  Button,
  Image
} from '../../../components'
import { saveAttributes, update, learnElement } from '../../../redux/characters'
import { clearState as clearSkillState } from '../../../redux/skills'
import { getAll, clearState as clearJobsState } from '../../../redux/jobs'
import { getAll as getAllSkills } from '../../../redux/skills'
import { labels, rules } from '../../../config/'
import { elements, getRankingLabel } from './helpers'
import texts from '../../../helpers/texts'

export const StyledActionButton = styled.button`
  cursor: pointer;
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
  font-size: 0.8em;
  padding: 3px 10px 3px 10px;
  letter-spacing: 1px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 5px 20px 5px;
`

export default () => {
  const [learningJutsu, setLearningJutsu] = useState(false)
  const [currentJutsuFilter, setCurrentJutsuFilter] = useState(undefined)
  const [currentAttributePoints, setCurrentAttributePoints] = useState(0)
  const [currentSkillPoints, setCurrentSkillPoints] = useState(0)
  const [attributes, setAttributes] = useState({})
  const [initialAttributes, setInitialAttributes] = useState({})

  const [selectedSkill, setSelectedSkill] = useState(undefined)
  const [selectedElement, setSelectedElement] = useState(undefined)
  const dispatch = useDispatch()

  const { list, selectedCharacter, language } = useSelector(
    ({ skills, user, jobs, common }) => {
      return {
        language: common.language,
        ...skills,
        ...user,
        ...jobs
      }
    }
  )

  useEffect(() => {
    return () => {
      dispatch(clearJobsState())
      dispatch(clearSkillState())
    }
  }, [dispatch])

  useEffect(() => {
    if (!list.length) dispatch(getAllSkills())
  }, [dispatch, list])

  useEffect(() => {
    setAttributes(selectedCharacter.attributes)
    setInitialAttributes(selectedCharacter.attributes)
  }, [selectedCharacter.attributes])

  useEffect(() => {
    dispatch(getAll())
  }, [dispatch])

  useEffect(() => {
    setCurrentAttributePoints(selectedCharacter.attributePoints)
    setCurrentSkillPoints(selectedCharacter.skillPoints)
  }, [selectedCharacter.attributePoints, selectedCharacter.skillPoints])

  const onDecreaseAttribute = attribute => {
    const initial = initialAttributes[attribute]
    const current = attributes[attribute]

    if (attributes[attribute] > 0 && current > initial) {
      setCurrentAttributePoints(currentAttributePoints + 1)
      setAttributes({ ...attributes, [attribute]: attributes[attribute] - 1 })
    }
  }

  const onIncreaseAttribute = attribute => {
    if (currentAttributePoints > 0) {
      setCurrentAttributePoints(currentAttributePoints - 1)
      setAttributes({ ...attributes, [attribute]: attributes[attribute] + 1 })
    }
  }

  const onClickLearnButton = () => {
    setLearningJutsu(true)
    dispatch(
      update(
        selectedCharacter._id,
        {
          skillPoints: selectedCharacter.skillPoints - 1,
          skill: selectedSkill._id
        },
        () => {
          setLearningJutsu(false)
        }
      )
    )
  }

  const onClickLearnElement = () => {
    dispatch(learnElement(selectedElement.value))
  }

  const characterHaveThisSkills = skills => {
    return (
      selectedCharacter.skills &&
      !!selectedCharacter.skills.filter(s => s._id === skills._id).length
    )
  }

  const onSaveAttributes = () => {
    dispatch(
      saveAttributes(selectedCharacter._id, {
        attributePoints: currentAttributePoints,
        attributes
      })
    )
  }

  const getSkillType = type => {
    const types = [
      { name: 'damager', text: texts.training.jutsuTypes.damage[language] },
      { name: 'healer', text: texts.training.jutsuTypes.heal[language] },
      { name: 'evasion', text: texts.training.jutsuTypes.deffense[language] }
    ]
    return types.find(t => t.name === type) || { text: `${type} N/A` }
  }

  const getSkillStyle = type => {
    const types = [
      { name: 'taijutsu', text: 'Taijutsu' },
      { name: 'ninjutsu', text: 'Ninjutsu' },
      { name: 'genjutsu', text: 'Genjutsu' }
    ]
    return types.find(t => t.name === type) || { text: `${type} N/A` }
  }

  const renderSkillTooltip = skill => {
    const {
      name,
      type,
      style,
      value,
      cost,
      requiredNinjaRank,
      requiredLevel
    } = skill

    return (
      <div>
        <div>{name}</div>
        <div>
          {texts.training.style[language]}: {getSkillStyle(style).text}
        </div>
        <div>
          {getSkillType(type).text}: {value}
        </div>
        <div>
          <b>{texts.training.requiredLevel[language]}: </b> {requiredLevel}
        </div>
        <div>
          <b>Rank</b> {getRankingLabel(requiredNinjaRank)}
        </div>
        <div>
          {labels.mana}: {cost}
        </div>
      </div>
    )
  }

  const renderCurrentElement = element => {
    const currentElement = elements.find(i => i.value === element)
    if (!currentElement) return null
    return (
      <Col sm={6}>
        {texts.training.currentElement[language]}
        <Tooltip text={currentElement.name}>
          <Image alt={currentElement.name} src={currentElement.image} />
        </Tooltip>
      </Col>
    )
  }

  return (
    <Page
      title={texts.training.title[language]}
      description={texts.training.description[language]}
      representantImage="https://res.cloudinary.com/dbmnsavja/image/upload/v1567454394/Naruto%20Game/Chibis/Minato.png"
    >
      <Row>
        <b>{texts.training.points.attribute[language]}:</b>{' '}
        {currentAttributePoints || 0}
      </Row>
      <Row>
        <b>{texts.training.points.skills[language]}:</b>{' '}
        {currentSkillPoints || 0}
      </Row>
      <Row>
        <Row>
          <Col sm={6}>
            <>
              {attributes && (attributes.attack || attributes.stamina) && (
                <>
                  <AttributesSelection
                    onDecreaseAttribute={onDecreaseAttribute}
                    onIncreaseAttribute={onIncreaseAttribute}
                    attributes={attributes}
                  />
                  <Row>
                    <Col sm={12}>
                      <Button onClick={() => onSaveAttributes()}>
                        {texts.training.save[language]}
                      </Button>
                    </Col>
                  </Row>
                </>
              )}
            </>
          </Col>
          <Col sm={6}>
            {list && !!list.length && (
              <>
                <Row>
                  <h3>{texts.training.title[language]}</h3>
                  <Row inline>
                    <StyledActionButton
                      isDisabled={currentJutsuFilter !== 'taijutsu'}
                      onClick={() => setCurrentJutsuFilter('taijutsu')}
                    >
                      Taijutsus
                    </StyledActionButton>
                    <StyledActionButton
                      isDisabled={currentJutsuFilter !== 'ninjutsu'}
                      onClick={() => setCurrentJutsuFilter('ninjutsu')}
                    >
                      Ninjutsus
                    </StyledActionButton>
                    <StyledActionButton
                      isDisabled={currentJutsuFilter !== 'genjutsu'}
                      onClick={() => setCurrentJutsuFilter('genjutsu')}
                    >
                      Genjutsus
                    </StyledActionButton>
                  </Row>
                  {list.map(skill => {
                    return (
                      !characterHaveThisSkills(skill) &&
                      (!currentJutsuFilter ||
                        currentJutsuFilter === skill.style) && (
                        <Col key={skill._id} sm={2}>
                          <Tooltip html={renderSkillTooltip(skill)}>
                            <Image
                              hasGreyscale={
                                !selectedSkill
                                  ? true
                                  : +selectedSkill.code !== +skill.code
                              }
                              width="30"
                              src={skill.image}
                              onClick={() => setSelectedSkill(skill)}
                              isDisabled={
                                !selectedSkill
                                  ? true
                                  : +selectedSkill.code !== +skill.code
                              }
                            />
                          </Tooltip>
                        </Col>
                      )
                    )
                  })}
                </Row>
                {!list.leght &&
                  !!list.filter(x => !characterHaveThisSkills(x)).length && (
                    <Row>
                      <Button
                        isDisabled={
                          !selectedSkill ||
                          !selectedCharacter.skillPoints ||
                          learningJutsu
                        }
                        onClick={() => onClickLearnButton()}
                      >
                        {texts.training.learnJutsu[language]}
                      </Button>
                    </Row>
                  )}
              </>
            )}
          </Col>
        </Row>
        <Row>
          {selectedCharacter.level >= rules.requiredLevelToFirstElement && (
            <Col sm={6}>
              {selectedCharacter.element ? (
                renderCurrentElement(selectedCharacter.element)
              ) : (
                <>
                  <Row>
                    {elements.map(i => (
                      <Col key={i.name} sm={4}>
                        <Tooltip text={i.name}>
                          <Image
                            onClick={() => setSelectedElement(i)}
                            isDisabled={
                              selectedElement && i.name !== selectedElement.name
                            }
                            src={i.image}
                            alt={i.name}
                          />
                        </Tooltip>
                      </Col>
                    ))}
                  </Row>
                  <Row>
                    <Col sm={12}>
                      <Button
                        isDisabled={!selectedElement}
                        onClick={() => onClickLearnElement()}
                      >
                        {texts.training.learnElement[language]}
                      </Button>
                    </Col>
                  </Row>
                </>
              )}
            </Col>
          )}
        </Row>
      </Row>
    </Page>
  )
}
