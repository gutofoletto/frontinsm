import React from 'react'
import { ReactComponent as Logo } from '../images/logo.svg'
import './Banner.scss'

const Banner = ({ title, date, time, place, ctas }) => (
  <section className='banner'>
    <div className='banner__logo'>
      <Logo alt='Front in Santa Maria' />
    </div>
  </section>
)

export default Banner
