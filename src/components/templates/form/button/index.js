import React from 'react'
import styled from 'styled-components'

const getButtonColor = (theme, noBorder, type) => {
  if (noBorder) return 'none'

  if (type) return theme.colors[type]

  return theme.colors.primary
}

const StyledButton = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 2px solid transparent;
  padding: ${({ small }) =>
    small ? null : '0.375rem 0.75rem 0.375rem 0.75rem'};
  font-size: 1rem;
  line-height: 1.5;

  /* TODO: validar */
  /* border-radius: 0.25rem; */
  border-radius: ${({ simpleBorder }) =>
    simpleBorder ? '5px' : '5px 20px 5px'};
  -webkit-transition: background-color 0.2s, border-color 0.2s, color 0.2s;
  transition: background-color 0.7s, border-color 0.2s, color 0.2s;

  color: ${({ theme, type }) =>
    type ? theme.colors[type] : theme.colors.primary};
  background-color: transparent;
  background-image: none;
  border-color: ${({ theme, noBorder, type }) =>
    getButtonColor(theme, noBorder, type)};

  margin: 5px 0 5px 0;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : null)};

  & a {
    text-decoration: none;
    color: ${({ theme, type }) =>
      type ? theme.colors[type] : theme.colors.primary};
  }

  &:hover {
    background-color: ${({ theme, noBorder, type }) =>
      getButtonColor(theme, noBorder, type)};
    color: ${({ theme, noBorder }) => (noBorder ? 'none' : theme.colors.white)};
  }

  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};

  @media only screen and (max-width: 720px) {
    padding: 0.375rem 0.75rem;
  }
`

export default ({ children, onClick, isDisabled, ...props }) => (
  <StyledButton
    {...props}
    isDisabled={isDisabled}
    onClick={isDisabled ? null : onClick}
  >
    {children}
  </StyledButton>
)
