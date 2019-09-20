import React from 'react'
import { Link } from 'react-router-dom'

import { StyledNavItem } from './styles'

const defaultIcon = 'https://image.flaticon.com/icons/svg/2013/2013885.svg'

export default ({ path, children, isBrand, ...props }) => (
  <StyledNavItem isBrand={isBrand} {...props}>
    {!path ? (
      <>
        <div>
          <img src={props.icon || defaultIcon} alt={props.icon} />
        </div>
        <div>{children}</div>
      </>
    ) : (
      <Link to={path}>
        <>
          <div>
            <img src={props.icon || defaultIcon} alt={props.icon} />
          </div>
          <div>{children}</div>
        </>
      </Link>
    )}
  </StyledNavItem>
)
