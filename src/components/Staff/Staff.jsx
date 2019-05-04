import React from 'react'
import { Section } from '..'
import { Container } from '..'
import Member from './Member'

import staff from '../../data/staff'
import Column from '../Layout/Column'

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
