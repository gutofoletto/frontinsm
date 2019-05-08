import React from 'react'
import { Section, Container, Column } from '../components/layout'
import Topic from '../components/Topic'

import faq from '../data/faq'

import './Faq.scss'

const Faq = () => (
  <Section title='Perguntas Frequentes' classname='faq'>
    <Container size='small'>
      <Column size={100}>
        {faq.map((topic, index) => (
          <Topic key={index} {...topic} />
        ))}
      </Column>
    </Container>
  </Section>
)

export default Faq
