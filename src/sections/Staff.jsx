import React from 'react'
import { Container, Column, Section } from '../components/layout'
import { Member } from '../components'

import staff from '../data/staff'

const Staff = () => (
  <Section title='Staff'>
    <Container>
      {staff.map((member, index) => (
        <Column key={index} size={25}>
          <Member {...member} />
        </Column>
      ))}
    </Container>
  </Section>
)

export default Staff
