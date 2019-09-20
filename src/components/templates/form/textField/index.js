import React from 'react'
import styled from 'styled-components'

const StyledTextField = styled.input`
  display: block;
  padding: 0.2em 0px 0.2em 0px;
  font-size: 1rem;
  line-height: 1.5;
  color: #564f64;
  background-color: #ffffff;
  background-image: none;
  background-clip: padding-box;
  border: 2px solid #dbd3e9;
  border-radius: 0.25rem;
  -webkit-transition: border-color 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  margin: 5px 0 5px -2px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'inherit')};

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    outline: 0;
  }
`

export const StyledLabel = styled.label`
  font-size: 1.2em;
  letter-spacing: 1px;
  font-weight: 600;
`

export default ({ children, onClick, label, ...props }) => (
  <>
    <StyledLabel>{label}</StyledLabel>
    <StyledTextField autoComplete="off" {...props} onClick={onClick} />
  </>
)
