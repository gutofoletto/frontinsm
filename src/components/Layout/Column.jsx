import React from 'react'

import './Column.scss'

const Column = ({ children, size = 1 }) => (
  <div className={`column column--${size}`}>{children}</div>
)

export default Column
