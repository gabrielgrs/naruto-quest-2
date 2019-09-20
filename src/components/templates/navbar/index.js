import React from 'react'
import { StyledNavBar, StyledHamburger } from './styles'

export default ({ children, setNavbarIsOpen }) => {
  return (
    <StyledNavBar>
      <StyledHamburger onClick={setNavbarIsOpen}>
        <div />
        <div />
        <div />
      </StyledHamburger>
      {children}
    </StyledNavBar>
  )
}
