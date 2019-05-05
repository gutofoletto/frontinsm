import React from 'react'

import { Container, Section } from '../components/layout'
import { Speaker } from '../components'

import speakers from '../data/speakers'

import './Speakers.scss'

const Speakers = () => {
  return (
    <Section title='Speakers' classname='speakers'>
      <Container>
        {speakers.map(
          (speaker, index) =>
            !speaker.hidden && <Speaker {...speaker} key={index} />
        )}
      </Container>
    </Section>
  )
}

export default Speakers
