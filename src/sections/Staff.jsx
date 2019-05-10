import React from 'react'
import { Container, Section } from '../components/layout'
import { Member } from '../components'

import staff from '../data/staff'

import './Staff.scss'

const { title, members } = staff

const Staff = () => (
  <Section title={title} classname='staff'>
    <Container>
      {members.map((member, index) => (
        <Member key={member.name} {...member} />
      ))}
    </Container>
  </Section>
)

export default Staff
