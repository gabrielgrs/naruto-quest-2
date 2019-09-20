import React, { useState } from 'react'
import styled from 'styled-components'
import { Navbar, NavItem } from '../'

export const StyledNavLinks = styled.div`
  display: flex;
  justify-content: center;
  z-index: 10;

  @media only screen and (max-width: 720px) {
    position: fixed;
    background-color: ${({ theme }) => theme.colors.darkPrimary};
    height: 103vh;
    width: 110%;
    left: -4%;
    top: -20px;
    flex-direction: column;
    clip-path: circle(100px at 90% -10%);
    -webkit-clip-path: circle(100px at 90% -10%);
    transition: all 0.5s ease-out;
    pointer-events: none;
    z-index: 9;

    ${({ navbarIsOpen }) => () => {
      if (navbarIsOpen) {
        return `
        clip-path: circle(1000px at 90% -10%);
        -webkit-clip-path: circle(1000px at 90% -10%);
        pointer-events: all;
        `
      }
    }}
    & div {
      padding: 3px;
    }
  }
`

export default ({
  isAuthenticated,
  dontHaveCharacters,
  onLogout,
  selectedCharacter
}) => {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false)
  const { inBattle, currentQuest } = selectedCharacter
  return (
    <Navbar setNavbarIsOpen={() => setNavbarIsOpen(!navbarIsOpen)}>
      <StyledNavLinks navbarIsOpen={navbarIsOpen}>
        <NavItem
          onClick={() => setNavbarIsOpen(false)}
          hidden={
            !isAuthenticated || dontHaveCharacters || inBattle || currentQuest
          }
          path="/vila"
        >
          Vila
        </NavItem>
        <NavItem
          onClick={() => setNavbarIsOpen(false)}
          hidden={!isAuthenticated || dontHaveCharacters || inBattle}
          path="/missoes"
        >
          Missões
        </NavItem>
        {inBattle && (
          <NavItem
            onClick={() => setNavbarIsOpen(false)}
            hidden={
              ((!isAuthenticated || dontHaveCharacters) && !inBattle) ||
              currentQuest
            }
            path="/campo"
          >
            Campo
          </NavItem>
        )}
        <NavItem
          onClick={() => setNavbarIsOpen(false)}
          hidden={!isAuthenticated || dontHaveCharacters || inBattle}
          path="/treinamento"
        >
          Treino
        </NavItem>
        {/* <NavItem
          onClick={() => setNavbarIsOpen(false)}
          hidden={!isAuthenticated || dontHaveCharacters || inBattle}
          path="/loja"
        >
          Loja
        </NavItem> */}
        {/* <NavItem
          onClick={() => setNavbarIsOpen(false)}
          hidden={!isAuthenticated || dontHaveCharacters || inBattle}
          path="/hospital"
        >
          Hospital
        </NavItem> */}
        {/* <NavItem
          onClick={() => setNavbarIsOpen(false)}
          hidden={!isAuthenticated || dontHaveCharacters}
          path="/treino"
        >
          Treino
        </NavItem> */}
        <NavItem
          onClick={() => setNavbarIsOpen(false)}
          hidden={
            !isAuthenticated || dontHaveCharacters || inBattle || currentQuest
          }
          path="/time"
        >
          Times
        </NavItem>
        {/* <NavItem
          onClick={() => setNavbarIsOpen(false)}
          hidden={!isAuthenticated || dontHaveCharacters}
          path="/time"
        >
          Time
        </NavItem> */}
        {/* <NavItem
          onClick={() => setNavbarIsOpen(false)}
          hidden={!isAuthenticated || dontHaveCharacters}
          path="/time"
        >
          Missões
        </NavItem> */}
        <NavItem
          onClick={() => setNavbarIsOpen(false)}
          hidden={!isAuthenticated || inBattle || selectedCharacter.selectedJob}
          path="/personagens"
        >
          Personagens
        </NavItem>
        <NavItem
          onClick={() => setNavbarIsOpen(false)}
          hidden={!isAuthenticated || inBattle || dontHaveCharacters}
          path="/ranking"
        >
          Ranking
        </NavItem>
        <NavItem
          onClick={() => setNavbarIsOpen(false)}
          hidden={!isAuthenticated || dontHaveCharacters}
          path="/chat"
        >
          Chat
        </NavItem>
        <NavItem
          hidden={!isAuthenticated}
          onClick={() => {
            onLogout()
            setNavbarIsOpen(false)
          }}
          path="/"
        >
          Sair
        </NavItem>
        <NavItem
          onClick={() => setNavbarIsOpen(false)}
          hidden={isAuthenticated}
          path="/registro"
        >
          Cadastro
        </NavItem>
        <NavItem
          onClick={() => setNavbarIsOpen(false)}
          hidden={isAuthenticated}
          path="/acesso"
        >
          Acesso
        </NavItem>
      </StyledNavLinks>
    </Navbar>
  )
}
