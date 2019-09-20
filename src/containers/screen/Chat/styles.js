import styled from 'styled-components'

export const StyledWrapper = styled.div`
  position: relative;
`

export const StyledChatPanel = styled.div`
  min-width: 100%;
  height: 300px;
  padding: 10px;
  overflow: auto;
  letter-spacing: 1px;
`

export const StyledTextField = styled.input`
  width: 100%;
`

export const StyledMessage = styled.div`
  position: relative;
  width: 80%;
  font-size: 0.8em;
  background: ${({ fromUser, theme }) =>
    fromUser ? theme.colors.info : theme.colors.primary};
  float: ${({ fromUser }) => (fromUser ? 'left' : 'right')};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 5px 10px 5px 10px;
  margin-top: 5px;
`
