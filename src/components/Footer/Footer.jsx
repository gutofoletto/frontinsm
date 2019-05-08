import React, { Fragment } from 'react'
import Credits from './Credits'
import { ReactComponent as Facebook } from '../../images/icon-facebook.svg'
import { ReactComponent as Twitter } from '../../images/icon-twitter.svg'
import { ReactComponent as Email } from '../../images/icon-email.svg'
import { Container } from '../layout'

import './Footer.scss'
import Braziljs from './Braziljs'

const Footer = () => (
  <Fragment>
    <Braziljs />
    <footer className='footer'>
      <div className='social'>
        <Container>
          <a
            className='social__link'
            href='http://facebook.com/frontinsm'
            title='facebook'
            target='blank'
            aria-label='facebook'
          >
            <Facebook />
          </a>
          <a
            className='social__link'
            href='http://twitter.com/frontinsm'
            title='twitter'
            target='blank'
          >
            <Twitter />
          </a>
          <a
            className='social__link'
            href='mailto:contato@frontinsm.com.br'
            title='enviar email'
            target='blank'
          >
            <Email />
          </a>
        </Container>
        <Credits name='gutofoletto' />
      </div>
    </footer>
  </Fragment>
)

export default Footer
