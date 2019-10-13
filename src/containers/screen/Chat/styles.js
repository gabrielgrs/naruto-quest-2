import styled from 'styled-components'

export const StyledWrapper = styled.div`
  position: relative;
`

export const StyledChatPanel = styled.div`
  min-width: 100%;
  height: 500px;
  padding: 10px;
  overflow: auto;
  letter-spacing: 1px;
`

export const StyledTextField = styled.input`
  width: 100%;
`

const getBackground = ({ fromGM, fromUser, theme }) => {
  if (fromGM) {
    return theme.colors.info
  }

  if (fromUser) {
    return theme.colors.secondary
  }

  return theme.colors.primary
}

export const StyledMessage = styled.div`
  position: relative;
  width: 80%;
  font-size: 0.8em;
  background: ${props => getBackground(props)};
  float: ${({ fromUser }) => (fromUser ? 'left' : 'right')};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0 10px 10px 10px;
  /* padding: 0 10px; */
  margin-top: 5px;
`

export const StyledDateMessage = styled.div`
  font-size: 0.6em;
  color: silver;
`

export const StyledSenderName = styled.div`
  letter-spacing: 1px;
  font-size: 0.9em;
`

export const StyledSenderLevel = styled.div`
  font-size: 0.7em;
`

export const StyledMessageText = styled.div`
  padding: 10px 0;
`
