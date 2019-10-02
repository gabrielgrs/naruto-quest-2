import React from 'react'

import { StyledProgressBar, StyledWrapper } from './styles'
import { Tooltip } from '../..'

export default ({ current, max, label, isTimer, ...props }) => (
  <StyledWrapper>
    {isTimer ? (
      <StyledProgressBar
        className="small"
        value={current}
        total={max}
        {...props}
      />
    ) : (
      <Tooltip text={`${label} - ${current}/${max}`}>
        {/* <label>{label}</label> */}
        <StyledProgressBar
          className="small"
          active
          inverted
          value={current}
          total={max}
          {...props}
          progress="ratio"
        />
      </Tooltip>
    )}
  </StyledWrapper>
)
