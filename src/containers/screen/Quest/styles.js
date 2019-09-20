import styled from 'styled-components'

export const StyledFilterButton = styled.button`
  cursor: pointer;
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
  font-size: 0.8em;
  padding: 3px 10px 3px 10px;
  letter-spacing: 1px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 5px 20px 5px;
`

export const StyledCompletedQuests = styled.div`
  margin: 20px;
  letter-spacing: 1px;
`

export const StyledLeaveButton = styled.span`
  font-size: 2em;
  font-family: ${({ theme }) => theme.fonts.secondary};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.danger};
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`

export const StyledMissionCouter = styled.span`
  font-size: 1.5em;
  margin: 10px;
`
