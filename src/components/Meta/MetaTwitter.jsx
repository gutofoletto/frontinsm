import React from 'react'
import Helmet from 'react-helmet'

const MetaTwitter = () => (
  <Helmet>
    <meta
      name='twitter:card'
      content='O Front-in SM (Santa Maria) foi criado com a finalidade de reunir o maior número possível de pessoas interessadas em trocar conhecimento sobre tecnologias Web Front-End.'
    />
    <meta name='twitter:site' content='@frontinsm' />
    <meta name='twitter:title' content='Front-in SM' />
    <meta
      name='twitter:description'
      content='O Front-in SM (Santa Maria) foi criado com a finalidade de reunir o maior número possível de pessoas interessadas em trocar conhecimento sobre tecnologias Web Front-End.'
    />
    <meta name='twitter:creator' content='@gutofoletto' />
    <meta
      name='twitter:image:src'
      content={`${process.env.PUBLIC_URL}/twitter.jpg`}
    />
  </Helmet>
)

export default MetaTwitter
