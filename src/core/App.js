import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'
import Router from './router'
import { ThemeProvider } from 'styled-components'
import { theme } from './configurations'
import {
  NavbarComponent,
  Row,
  Col,
  OverlayLoader,
  Toast,
  CharacterBar,
  // Footer
  Onboarding
} from '../components'
// import Sidebar from '../containers/templates/Sidebar'
import { getUserByToken, clearSession } from '../redux/users'
import * as storageHelper from '../helpers/storage'

export const StyledActionButton = styled.div`
  cursor: pointer;
  text-decoration: none;
  position: fixed;
  bottom: 0;
  right: 50px;
  padding: 10px 20px 10px 20px;
  letter-spacing: 2px;
  font-size: 1.2em;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  @media screen and (max-width: 820px) {
    right: 30px;
    font-size: 0.7em;
  }
`

export const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: 1440px;
`

export const StyledTag = styled.div`
  cursor: default;
  color: #fff;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 3px 10px 3px 10px;
  top: 20px;
  left: 10px;
  z-index: 999;
  cursor: default;
`

export default () => {
  const [showOnboarding, setShowonboarding] = useState(false)
  const {
    isAuthenticated,
    selectedCharacter,
    token,
    loadingUser,
    loadingEnemy,
    loadingBattle,
    loadingCharacter,
    loadingQuest,
    loadingTeam,
    loadingVip,
    loadingImage
  } = useSelector(
    ({ user, enemies, battle, character, quest, team, vip, common }) => {
      return {
        ...user,
        loadingEnemy: enemies.loadingEnemy,
        loadingBattle: battle.loadingBattle,
        loadingCharacter: character.loadingCharacter,
        loadingQuest: quest.loadingQuest,
        loadingTeam: team.loadingTeam,
        loadingVip: vip.loadingVip,
        loadingImage: common.loadingImage
      }
    }
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (isAuthenticated && token) dispatch(getUserByToken(token))
  }, [isAuthenticated, token, dispatch])

  const dontHaveCharacters = !Object.keys(selectedCharacter).length

  const onLogout = () => {
    storageHelper.clearStorage()
    dispatch(
      clearSession(() => setTimeout(() => window.location.reload(), 500))
    )
  }

  const needToLoadPage = () => {
    return (
      loadingUser ||
      loadingEnemy ||
      loadingBattle ||
      loadingCharacter ||
      loadingQuest ||
      loadingTeam ||
      loadingVip ||
      loadingImage
    )
  }

  const loadingScreen = needToLoadPage()

  const renderActionButton = () => {
    if (!!selectedCharacter.inBattle)
      return (
        <StyledActionButton to="/campo">Voltar para Batalha</StyledActionButton>
      )

    if (!!selectedCharacter.currentQuest)
      return (
        <StyledActionButton to="/missoes">
          Voltar para Missão
        </StyledActionButton>
      )

    return (
      <StyledActionButton onClick={() => setShowonboarding(true)}>
        Tutorial
      </StyledActionButton>
    )
  }

  document.addEventListener(
    'mousedown',
    function(event) {
      if (event.detail > 1) {
        event.preventDefault()
      }
    },
    false
  )

  return (
    <ThemeProvider theme={theme(selectedCharacter.village)}>
      <OverlayLoader loading={loadingScreen}>
        {process.env.NODE_ENV !== 'production' && (
          <StyledTag>Servidor de Testes</StyledTag>
        )}
        <Row>
          {!selectedCharacter.inBattle && (
            <NavbarComponent
              isAuthenticated={isAuthenticated}
              dontHaveCharacters={dontHaveCharacters}
              onLogout={onLogout}
              selectedCharacter={selectedCharacter}
            />
          )}
          {/* {isAuthenticated && !selectedCharacter.inBattle && (
          <Col sm={3}>
            <Sidebar />
          </Col>
        )} */}
          <StyledWrapper>
            <Col sm={12}>
              {isAuthenticated && !selectedCharacter.inBattle && (
                <CharacterBar selectedCharacter={selectedCharacter} />
              )}
            </Col>
            <Col sm={12}>
              <Router />
            </Col>
          </StyledWrapper>
          {/* <Footer fixed title="Todos os direitos reservados">
        <h3>Naruto Quest</h3>
        <div>Developed 4Fun</div>
      </Footer> */}
          {renderActionButton()}
          {
            <Onboarding
              isOpen={showOnboarding}
              onLastStep={() => setShowonboarding(false)}
            />
          }
          <Toast />
        </Row>
      </OverlayLoader>
    </ThemeProvider>
  )
}
