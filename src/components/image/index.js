import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { onLoadImage } from '../../redux/common'

const StyledItem = styled.img`
  background: ${({ theme }) => `repeating-linear-gradient(
    -45deg,
    ${theme.colors.black},
    ${theme.colors.black} 40px,
    #1b1b1b 40px,
    #1b1b1b 80px
  )`};

  cursor: ${({ isDisabled, canBeBlocked }) =>
    isDisabled && canBeBlocked ? 'not-allowed' : 'pointer'};
  width: 100%;

  /* effects  */
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
  outline: ${({ hasOutline, theme }) =>
    hasOutline ? `solid ${theme.colors.black} 2px` : null};
  outline-offset: -5px;
  border-radius: 5px;
  border: ${({ isDisabled, theme }) =>
    isDisabled
      ? 'solid rgba(0, 0, 0, 0) 2px'
      : `solid ${theme.colors.black} 2px`};

  filter: ${({ hasGreyscale }) =>
    hasGreyscale
      ? `sepia(20%) brightness(1.1) grayscale(100)`
      : `sepia(20%) brightness(1.1) grayscale(0)`};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export default ({ src, alt, isDisabled, canBeBlocked, onClick, ...props }) => {
  const dispatch = useDispatch()

  const onLoadStart = () => dispatch(onLoadImage(false))

  const onLoadFinish = () => dispatch(onLoadImage(true))

  return (
    <StyledItem
      {...props}
      onLoadStart={() => onLoadStart()}
      onLoad={() => onLoadFinish()}
      onClick={isDisabled && canBeBlocked ? null : onClick}
      isDisabled={isDisabled}
      src={src}
      canBeBlocked={canBeBlocked}
      alt={alt || src}
    />
  )
}
