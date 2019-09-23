import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  StyledWrapper,
  StyledTitle,
  StyledDescription,
  StyledReturnButton,
  StyledContent,
  StyledHeader,
  StyledLoadingPage,
  StyledCharacter
} from './styles'
import { Row, Col, Tooltip } from '../../index'
import texts from '../../../helpers/texts'

export default ({
  children,
  title,
  description,
  returnPath,
  hiddenLoader,
  representantImage,
  helperText
}) => {
  const {
    selectedCharacter,
    loadingUser,
    loadingEnemy,
    loadingBattle,
    loadingCharacter,
    loadingQuest,
    loadingTeam,
    language
  } = useSelector(
    ({ user, enemies, battle, character, quest, team, common }) => {
      return {
        ...user,
        language: common.language,
        loadingEnemy: enemies.loadingEnemy,
        loadingBattle: battle.loadingBattle,
        loadingCharacter: character.loadingCharacter,
        loadingQuest: quest.loadingQuest,
        loadingTeam: team.loadingTeam
      }
    }
  )

  const loadingScreen =
    loadingUser ||
    loadingEnemy ||
    loadingBattle ||
    loadingCharacter ||
    loadingQuest ||
    loadingTeam

  return (
    <StyledWrapper>
      <Row>
        <Col sm={4}>
          <StyledHeader>
            <Row style={{ display: 'flex' }}>
              {returnPath &&
                !(
                  selectedCharacter.inBattle || selectedCharacter.currentQuest
                ) && (
                  <Tooltip text={`Voltar para ${returnPath.replace('/', '')}`}>
                    <Link to={returnPath}>
                      <StyledReturnButton>
                        <img
                          height="40"
                          src="https://image.flaticon.com/icons/svg/118/118739.svg"
                          alt="voltar"
                        />
                      </StyledReturnButton>
                    </Link>
                  </Tooltip>
                )}
              <StyledTitle>{title}</StyledTitle>
            </Row>

            <StyledDescription>{description}</StyledDescription>
          </StyledHeader>
        </Col>
        <Col sm={6}>
          <h1 style={{ opacity: 0.1, cursor: 'default' }}>
            {texts.page.versionDescription[language]}
          </h1>
        </Col>
        <Col sm={2}>
          <Tooltip position="left" text={helperText || ''}>
            <StyledCharacter
              src={
                representantImage ||
                'https://res.cloudinary.com/dbmnsavja/image/upload/v1567454394/Naruto%20Game/Chibis/Karin.png'
              }
            />
          </Tooltip>
        </Col>
      </Row>
      <StyledContent>
        {loadingScreen && !hiddenLoader ? <StyledLoadingPage /> : children}
      </StyledContent>
    </StyledWrapper>
  )
}
