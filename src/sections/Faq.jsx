import React from 'react'
import { Section, Container, Column } from '../components/layout'

import faq from '../data/faq'
import Topic from '../components/Topic'

const Faq = () => (
  <Section title='Perguntas Frequentes'>
    <Container>
      <Column size={100}>
        {faq.map((topic, index) => (
          <Topic key={index} {...topic} />
        ))}
      </Column>
    </Container>
  </Section>
)

export default Faq
