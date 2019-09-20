import React from 'react'

import { StyledFooter, StyledFooterHeader, StyledFooterContent } from './styles'

export default ({ children, title, fixed }) => (
  <StyledFooter>
    <StyledFooterHeader fixed={fixed}>{title}</StyledFooterHeader>
    {children && (
      <StyledFooterContent fixed={fixed}>{children}</StyledFooterContent>
    )}
  </StyledFooter>
)
