import React from 'react'
import BraziljsLogo from '../../images/braziljs.png'

import './Braziljs.scss'
import { Container } from '../layout'

const Braziljs = () => (
  <div className='braziljs'>
    <Container align='center'>
      <img className='braziljs__logo' src={BraziljsLogo} alt='' />
    </Container>
  </div>
)

export default Braziljs
