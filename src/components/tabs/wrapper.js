import React, { useState } from 'react'
import styled from 'styled-components'
import { Row } from '../'

export const StyledTab = styled.button`
  min-width: 120px;
  text-align: center;
  cursor: pointer;
  padding: 3px 5px 3px 5px;
  margin-right: 3px;
  border-top-left-radius: ${({ isFirstTab }) => (isFirstTab ? '10px' : null)};
  border-top-right-radius: ${({ isLastTab }) => (isLastTab ? '10px' : null)};
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
  background: ${({ isDisabled, theme }) =>
    isDisabled ? 'transparent' : theme.colors.primary};
  color: ${({ isDisabled, theme }) => (isDisabled ? null : theme.colors.white)};
  letter-spacing: 1px;
`

export const StyledContent = styled.div`
  padding: 10px 0 10px 0;
`

export default ({ children }) => {
  // export default ({ children, onChangeTab }) => {
  const [currentTab, setCurrentTab] = useState(0)

  return (
    <div>
      <Row inline>
        {children.map((c, index) => (
          <StyledTab
            isFirstTab={index === 0}
            isLastTab={index === children.length - 1}
            isDisabled={currentTab !== index}
            onClick={() => {
              setCurrentTab(index)
              // onChangeTab(index)
            }}
          >
            {c.props.title}
          </StyledTab>
        ))}
      </Row>
      <StyledContent>{children[currentTab]}</StyledContent>
    </div>
  )
}
