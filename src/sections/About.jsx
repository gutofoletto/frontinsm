import React from 'react'
import { Container, Section } from '../components/layout'

import content from '../data/content'

import './About.scss'

const About = () => (
  <Section classname='about'>
    <Container size='small'>
      {content.about.text.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </Container>
  </Section>
)

export default About
