import React from 'react'

import './Partner.scss'

const Partner = ({ name, brand, url }) => (
  <div className='partner'>
    <a href={url} title={name} target='_blank' rel='noopener noreferrer'>
      <img className='partner__logo' src={brand} alt={name} />
    </a>
  </div>
)

export default Partner
