import React from 'react'
import { Container, Section } from '../components/layout'
import Sponsor from '../components/Sponsor'

import sponsors from '../data/sponsors'

import './Sponsors.scss'

const { gold, silver, bronze } = sponsors

const Sponsors = () => (
  <Section title='Patrocinadores' classname='sponsors'>
    <Container>
      {gold.map(sponsor => (
        <Sponsor key={sponsor.name} {...sponsor} />
      ))}
    </Container>
    <Container>
      {silver.map(sponsor => (
        <Sponsor key={sponsor.name} {...sponsor} />
      ))}
    </Container>
    <Container>
      {bronze.map(sponsor => (
        <Sponsor key={sponsor.name} {...sponsor} />
      ))}
    </Container>
  </Section>
)

export default Sponsors
