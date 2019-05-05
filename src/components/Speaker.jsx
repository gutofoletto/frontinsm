import React from 'react'

const Speaker = ({ name, bio, company, github, twitter }) => (
  <div className='speaker'>
    <span className='speaker__name'>{name}</span>
    {company && <span className='speaker__company'>{company}</span>}
    <p className='speaker__bio'>{bio}</p>
    {github && (
      <a href={github} className='speaker__social'>
        Github
      </a>
    )}
    {twitter && (
      <a href={twitter} className='speaker__social'>
        Twitter
      </a>
    )}
  </div>
)

export default Speaker
