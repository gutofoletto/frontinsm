import React from 'react'
import { Section, Container } from '../components/layout'
import Talk from '../components/Activity'

import program from '../data/program'

import './Program.scss'

const Program = () => (
  <Section title='Programa' classname='program'>
    <Container size='small'>
      {program.map(event => (
        <Talk key={event.time} {...event} />
      ))}
    </Container>
  </Section>
)

export default Program
