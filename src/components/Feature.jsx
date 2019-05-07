import React from 'react'
import Icon from './ui/Icon'

import './Feature.scss'

const Feature = ({ title, icon, children }) => (
  <div className='feature'>
    <h3 className='feature__title'>
      <Icon type={icon} className='feature__icon' width={32} height={32} />
      {title}
    </h3>
    <p className='feature__text'>{children}</p>
  </div>
)

export default Feature
