import React from 'react'

import { StyledColumn } from './styles'

export default ({ sm, end, style, children, ...props }) => (
  <StyledColumn style={style} {...props} quantity={sm}>
    {children}
  </StyledColumn>
)
