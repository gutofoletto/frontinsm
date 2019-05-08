import React from 'react'
import linkComponent from '../utils/linkComponent'

import './Sponsor.scss'

const Sponsor = ({ name, brand, url }) => {
  const { Component, ...linkProps } = linkComponent(url)
  return (
    <Component className='sponsor' {...linkProps}>
      {!!brand ? (
        <img src={brand} alt={name} className='sponsor__brand' />
      ) : (
        <span className='sponsor__name'>{name}</span>
      )}
    </Component>
  )
}

export default Sponsor
