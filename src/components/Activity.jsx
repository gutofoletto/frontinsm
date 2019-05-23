import React from 'react'
import { Icon } from './ui'

import './Activity.scss'

const Activity = ({ time, kind, title, speaker, description }) => (
  <div className='activity'>
    <span className='activity__time'>{time}</span>
    <h3 className='activity__title'>
      <Icon
        type={kind}
        className={`activity__icon ${kind === 'happyhour' &&
          'activity__icon--drink'}`}
      />
      {title}
    </h3>
    <span className='activity__speaker'>{speaker}</span>
    <p className='activity__description'>{description}</p>
  </div>
)

export default Activity
