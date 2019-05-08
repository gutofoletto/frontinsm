import React from 'react'
import { Container, Section } from '../components/layout'
import Sponsor from '../components/Sponsor'

import sponsors from '../data/sponsors'

import './Sponsors.scss'

const { gold, silver, bronze } = sponsors

const Sponsors = () => (
  <Section title='Patrocínio' classname='sponsors'>
    <div className='sponsors__gold'>
      <Container>
        {gold.map(sponsor => (
          <Sponsor key={sponsor.name} {...sponsor} />
        ))}
      </Container>
    </div>
    <div className='sponsors__silver'>
      <Container>
        {silver.map(sponsor => (
          <Sponsor key={sponsor.name} {...sponsor} />
        ))}
      </Container>
    </div>
    <div className='sponsors__bronze'>
      <Container>
        {bronze.map(sponsor => (
          <Sponsor key={sponsor.name} {...sponsor} />
        ))}
      </Container>
    </div>
  </Section>
)

export default Sponsors
