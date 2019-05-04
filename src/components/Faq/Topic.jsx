import React from 'react'

const Topic = ({ question, answer }) => (
  <div className='topic'>
    <p className='topic__question'>{question}</p>
    <p className='topic__anser'>{answer}</p>
  </div>
)

export default Topic
