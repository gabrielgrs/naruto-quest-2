import React from 'react'
import styled from 'styled-components'

export const StyledResourceNotFound = styled.div`
  font-size: 2em;
  margin: 0 auto;
`

export default ({ text }) => {
  return (
    <StyledResourceNotFound>
      {text || 'Nenhum item encontrado'}
    </StyledResourceNotFound>
  )
}
