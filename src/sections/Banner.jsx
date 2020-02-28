import './Banner.scss'

import { Button } from '../components/ui'
import { ReactComponent as Logo } from '../images/logo.svg'
import React from 'react'

const Banner = ({ date, time, place, cta }) => (
  <div className='banner'>
    <div className='banner__container'>
      <div className='banner__logo'>
        <Logo alt='Front in Santa Maria' width='128' />
      </div>
      <div className='banner__content'>
        <h2 className='banner__title'>
          {date} • {time}
        </h2>
        <h2 className='banner__title'>{place}</h2>
      </div>
    </div>
    <div className='banner__cta'>
      <Button to={cta.link}>{cta.text}</Button>
    </div>
  </div>
)

export default Banner
