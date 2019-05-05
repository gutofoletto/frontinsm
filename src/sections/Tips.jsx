import React from 'react'
import { Section, Container } from '../components/layout'
import { Hotel } from '../components'

import hotels from '../data/hotels'

const Tips = () => (
  <Section title='Hospedagem' className='hospedagem'>
    <Container>
      {hotels.map(hotel => (
        <Hotel key={hotel.name} {...hotel} />
      ))}
    </Container>
  </Section>
)

export default Tips
