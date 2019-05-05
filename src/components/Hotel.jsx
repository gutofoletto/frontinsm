import React from 'react'
import linkComponent from '../utils/linkComponent'

const Hotel = ({ name, address, phone, website }) => {
  const { Component, ...linkProps } = linkComponent(website)
  return (
    <Component className='hotel' {...linkProps}>
      <span className='hotel__name'>{name}</span>
      <address className='hotel__address'>{address}</address>
      <span className='hotel__phone'>{phone}</span>
    </Component>
  )
}

export default Hotel
