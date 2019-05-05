import React from 'react'

import './Speaker.scss'

const Speaker = ({ avatar, name, bio, company, github, twitter }) => (
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
        <a href={github} className='speaker__social'>
          Github
        </a>
      )}
      {twitter && (
        <a href={twitter} className='speaker__social'>
          Twitter
        </a>
      )}
    </div>
  </div>
)

export default Speaker
