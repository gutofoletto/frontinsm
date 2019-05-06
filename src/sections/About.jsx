import React from 'react'
import { Container, Section } from '../components/layout'

import './About.scss'

const About = () => (
  <Section classname='about'>
    <Container size='small'>
      <p>
        O FRONT IN SM é um evento para estudantes, profissionais e entusiastas
        de tecnologia. Pessoas que querem aprimorar seus conhecimentos,
        alavancar suas carreiras ou negócios, e como consequência, ajudar a
        transformar o mercado de desenvolvimento Web em Santa Maria.{' '}
      </p>
      <p>
        Com o intuito de proporcionar um novo mindset necessário para esta
        transformação, vamos reunir profissionais qualificados que vão trazer
        seu expertise e conhecimentos práticos de mercado para uma imersão em
        Front-end.
      </p>
    </Container>
  </Section>
)

export default About
