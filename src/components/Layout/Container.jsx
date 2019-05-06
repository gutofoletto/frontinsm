import React from 'react'

import './Container.scss'

const sizes = {
  small: 'container--small',
}

const Container = ({ children, size }) => (
  <div className={`container ${sizes[size]}`}>{children}</div>
)

export default Container
