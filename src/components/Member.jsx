import React from 'react'

import { ReactComponent as Twitter } from '../images/icon-twitter.svg'
import { ReactComponent as Github } from '../images/icon-github.svg'
import { ReactComponent as Medium } from '../images/icon-medium.svg'

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
          <Github />
        </a>
      )}
      {medium && (
        <a href={medium} className='member__icon'>
          <Medium />
        </a>
      )}
      {twitter && (
        <a href={twitter} className='member__icon'>
          <Twitter />
        </a>
      )}
    </div>
  </div>
)

export default Member
