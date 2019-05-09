import React from 'react'
import BraziljsLogo from '../../images/braziljs.png'

import './Braziljs.scss'
import { Container } from '../layout'

const Braziljs = () => (
  <div className='braziljs'>
    <Container align='center'>
      <a
        href='https://braziljs.org'
        title='BrazilJS'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img className='braziljs__logo' src={BraziljsLogo} alt='' />
      </a>
    </Container>
  </div>
)

export default Braziljs
