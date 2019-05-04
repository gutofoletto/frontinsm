import React from 'react'

const setup = url =>
  url
    ? {
        Component: 'a',
        href: { url },
        target: '__blank',
        rel: 'noopener nofollow',
      }
    : { Component: 'div' }

const Sponsor = ({ name, brand, url }) => {
  const { Component, ...Props } = setup(url)
  return (
    <Component className='sponsor' {...Props}>
      {!!brand && <img src={brand} alt={name} className='sponsor__brand' />}
      <span className='sponsor__name'>{name}</span>
    </Component>
  )
}

export default Sponsor
