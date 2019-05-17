import React from 'react'
import { Section, Container } from '../components/layout'
import Partner from '../components/Partner'

import partners from '../data/partners'

import './Partners.scss'

const Partners = () => (
  <Section classname='partners'>
    <Container align='center'>
      {partners.map(partner => (
        <Partner key={partner.name} {...partner} />
      ))}
    </Container>
  </Section>
)

export default Partners
