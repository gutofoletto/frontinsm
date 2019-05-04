import React from 'react'
import Section from '../Layout/Section'
import Container from '../Layout/Container'

import sponsors from '../../data/sponsors'
import Sponsor from './Sponsor'

const { gold, silver, bronze } = sponsors

const Sponsors = () => (
  <Section title='Sponsors'>
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
