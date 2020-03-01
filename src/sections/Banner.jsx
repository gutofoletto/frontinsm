import './Banner.scss'

import { Button } from '../components/ui'
import { ReactComponent as Logo } from '../images/logo.svg'
import React from 'react'

const Banner = ({ title, date, time, place, ctas }) => (
  <section className='banner'>
    <div className='banner__logo'>
      <Logo alt='Front in Santa Maria' />
    </div>
    <div className='banner__headline'>
      <h1>{title}</h1>
    </div>
    <div className='banner__content'>
      <h2 className='banner__title'>
        {date} • {time}
        <br />
        {place}
      </h2>
    </div>
    <div className='banner__cta'>
      {ctas.length &&
        ctas.map(({ link, text, variant }) => (
          <Button to={link} variant={variant}>
            {text}
          </Button>
        ))}
    </div>
  </section>
)

export default Banner
