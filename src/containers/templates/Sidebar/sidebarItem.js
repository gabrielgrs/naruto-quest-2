import React from 'react'
import { Link } from 'react-router-dom'
import { StyledSidebarItem } from './styles'

export default ({ children, path }) => (
  <StyledSidebarItem>
    <Link to={path}>{children}</Link>
  </StyledSidebarItem>
)
