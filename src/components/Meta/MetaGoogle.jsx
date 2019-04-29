import React from 'react'
import Helmet from 'react-helmet'

const MetaGoogle = () => (
  <Helmet>
    <meta itemprop='name' content='Front in SM' />
    <meta
      itemprop='description'
      content='O Front-in SM (Santa Maria) foi criado com a finalidade de reunir o maior número possível de pessoas interessadas em trocar conhecimento sobre tecnologias Web Front-End.'
    />
    <meta itemprop='image' content={`${process.env.PUBLIC_URL}/facebook.jpg`} />
  </Helmet>
)

export default MetaGoogle
