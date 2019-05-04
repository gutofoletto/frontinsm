import React from 'react'
import Container from './Container'

import './Section.scss'

const Section = ({ title, children, classname }) => (
  <section className={`section ${classname}`}>
    {title && (
      <Container>
        <h1>{title}</h1>
      </Container>
    )}
    {children}
  </section>
)

export default Section
