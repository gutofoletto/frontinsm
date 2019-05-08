import React from 'react'
import Container from './Container'

import './Section.scss'

const Section = ({ title, children, classname = '' }) => (
  <section className={`section ${classname}`}>
    {title && (
      <Container align='center'>
        <h1 className='section__title'>{title}</h1>
      </Container>
    )}
    {children}
  </section>
)

export default Section
