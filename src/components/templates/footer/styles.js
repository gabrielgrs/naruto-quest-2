import styled from 'styled-components'

export const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  /* margin-top: 20px; */
`

export const StyledFooterHeader = styled.div`
  margin-top: 100px;
  /* width: 100%; */
  padding: 5px 5px 5px 5px;
  font-size: 0.8em;
  background: ${({ theme }) => theme.colors.darkPrimary};
  color: ${({ theme }) => theme.colors.white};
`

export const StyledFooterContent = styled.div`
  padding: 30px 10px 30px 10px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`
