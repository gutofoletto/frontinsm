import React from 'react'

import './Topic.scss'

const printList = answer => {
  return (
    <ul>
      {answer.map((paragraph, index) => (
        <li key={index}>{paragraph}</li>
      ))}
    </ul>
  )
}

const Topic = ({ question, answer, link }) => (
  <div className='topic'>
    <p className='topic__question'>{question}</p>
    <p className='topic__answer'>{answer.m}</p>
    <div className='topic__answer'>
      {answer.length > 1 ? printList(answer) : <p>{answer}</p>}
      {link && (
        <a href={link} target='_blank' rel='noopener noreferrer'>
          {link}
        </a>
      )}
    </div>
  </div>
)

export default Topic
