import React from 'react'
import 'react-tippy/dist/tippy.css'
import { Tooltip } from 'react-tippy'

export default ({ children, html, text, position }) => {
  return (
    <Tooltip
      title={text}
      html={html}
      position={position || 'bottom'}
      trigger="mouseenter"
    >
      {children}
    </Tooltip>
  )
}
