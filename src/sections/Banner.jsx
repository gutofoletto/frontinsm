import React from 'react'
import { Button } from '../components/ui'
import { ReactComponent as Logo } from '../images/logo.svg'

import './Banner.scss'

const Banner = () => (
  <div className='banner'>
    <div className='banner__container'>
      <div className='banner__logo'>
        <Logo alt='Front in Santa Maria' width='128' />
      </div>
      <div className='banner__content'>
        <h2 className='banner__title'>08 de Junho • 9h</h2>
        <h2 className='banner__title'>Itaimbé Palace Hotel</h2>
      </div>
    </div>
    <div className='banner__cta'>
      <Button type='button'>Inscreva-se</Button>
    </div>
  </div>
)

export default Banner
