import React from 'react'
import { Icon } from './ui'

import './Speaker.scss'

const Speaker = ({ avatar, name, bio, company, github, twitter, lattes }) => (
  <div className='speaker'>
    <div className='speaker__head'>
      {avatar && <img className='speaker__avatar' src={avatar} alt='' />}
      <div className='speaker__info'>
        <span className='speaker__name'>{name}</span>
        {company && <span className='speaker__company'>{company}</span>}
      </div>
    </div>
    <div className='speaker__description'>
      <p className='speaker__bio'>{bio}</p>
      {github && (
        <a
          href={github}
          className='speaker__social'
          title={`${name} Github`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Icon type='github' />
        </a>
      )}
      {twitter && (
        <a
          href={twitter}
          className='speaker__social'
          title={`${name} Twitter`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Icon type='twitter' />
        </a>
      )}
      {lattes && (
        <a
          href={lattes}
          className='speaker__social'
          title={`${name} Lattes`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Icon type='lattes' />
        </a>
      )}
    </div>
  </div>
)

export default Speaker
