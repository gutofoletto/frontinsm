import React from 'react'
import { Column, Container, Section } from '../components/layout'
import Feature from '../components/Feature'

import content from '../data/content'

import './Features.scss'

const Features = () => (
  <Section classname='features'>
    <Container align='center'>
      <Column size={40} />
      <Column size={60}>
        {content.features.map((feature, index) => (
          <Feature key={index} title={feature.title} icon={feature.icon}>
            {feature.text}
          </Feature>
        ))}
      </Column>
    </Container>
  </Section>
)

export default Features
