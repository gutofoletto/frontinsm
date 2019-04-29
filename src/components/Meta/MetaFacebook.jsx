import React from 'react'
import Helmet from 'react-helmet'

const MetaFacebook = () => (
  <Helmet>
    <meta property='og:url' content='http://frontinsm.com.br' />
    <meta property='og:title' content='Front-in SM' />
    <meta
      property='og:description'
      content='O Front-in SM (Santa Maria) foi criado com a finalidade de reunir o maior número possível de pessoas interessadas em trocar conhecimento sobre tecnologias Web Front-End.'
    />
    <meta property='og:site_name' content='Front-in SM' />
    <meta
      property='og:image'
      content={`${process.env.PUBLIC_URL}/facebook.jpg`}
    />
    <meta property='og:locale' content='pt_BR' />
  </Helmet>
)

export default MetaFacebook
