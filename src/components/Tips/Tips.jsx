import React from 'react'
import { Section, Container } from '..'
import Hotel from './Hotel'

import hotels from '../../data/hotels'

const Tips = () => (
  <Section title='Hospedagem' className='hospedagem'>
    <Container>
      {hotels.map(hotel => (
        <Hotel {...hotel} />
      ))}
    </Container>
  </Section>
)

export default Tips
