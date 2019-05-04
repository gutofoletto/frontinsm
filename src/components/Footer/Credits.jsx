import React from 'react'
import Container from '../Layout/Container'

const Credits = ({ name }) => (
  <Container>
    <p>
      done with{' '}
      <span role='img' aria-label='green heart'>
        💚
      </span>{' '}
      by{' '}
      <a href='http://github.com/gutofoletto' title='gutofoletto'>
        gutofoletto
      </a>
    </p>
  </Container>
)

export default Credits
