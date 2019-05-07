import React from 'react'

import './Container.scss'

const sizes = {
  small: 'container--small',
}

const alignment = {
  center: 'container--centered',
}

const Container = ({ children, size, align }) => (
  <div className={`container ${sizes[size]} ${alignment[align]}`}>
    {children}
  </div>
)

export default Container
