import React from 'react'
import { Icon } from './ui'

import './Member.scss'

const Member = ({ name, avatar, github, medium, twitter }) => (
  <div className='member'>
    <div className='member__info'>
      {avatar && <img className='member__avatar' src={avatar} alt='' />}
      <span className='member__name'>{name}</span>
    </div>
    <div className='member__social'>
      {github && (
        <a href={github} className='member__icon'>
          <Icon type='github' />
        </a>
      )}
      {medium && (
        <a href={medium} className='member__icon'>
          <Icon type='medium' />
        </a>
      )}
      {twitter && (
        <a href={twitter} className='member__icon'>
          <Icon type='twitter' />
        </a>
      )}
    </div>
  </div>
)

export default Member
