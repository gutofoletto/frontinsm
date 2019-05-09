import React from 'react'
import { Container, Column, Section } from '../components/layout'
import { Member } from '../components'

import staff from '../data/staff'

import './Staff.scss'

const { title, members } = staff

const Staff = () => (
  <Section title={title} classname='staff'>
    <Container>
      {members.map((member, index) => (
        // <Column key={index} size={25}>
        <Member {...member} />
        // </Column>
      ))}
    </Container>
  </Section>
)

export default Staff
