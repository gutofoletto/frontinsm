import React from 'react'
import { Section, Container } from '../components/layout'
import { Sympla } from '../components'

import './Tickets.scss'

const Tickets = () => (
  <Section title='Ingressos' classname='tickets'>
    <Container size='small' align='center'>
      <div className='code-of-conduct'>
        <a
          href='https://drive.google.com/open?id=1Vne8AVmqdGssuBFt0z9e7AcJfMZjefiT'
          target='_blank'
          rel='noopener noreferrer'
        >
          Código de Conduta
        </a>
      </div>
    </Container>
    <Container size='small'>
      <Sympla id={461618} />
    </Container>
  </Section>
)

export default Tickets
