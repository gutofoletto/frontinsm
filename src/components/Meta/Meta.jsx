import React from 'react'
import Helmet from 'react-helmet'

import MetaGoogle from './MetaGoogle'
import MetaFacebook from './MetaFacebook'
import MetaTwitter from './MetaTwitter'
import MetaIcons from './MetaIcons'

const Meta = () => (
  <Helmet>
    <meta name='application-name' content='Front in Santa Maria' />
    <meta name='theme-color' content='#1cd000' />
    <meta
      name='description'
      content='O Front-in SM (Santa Maria) foi criado com a finalidade de reunir o maior número possível de pessoas interessadas em trocar conhecimento sobre tecnologias Web Front-End.'
    />
    <meta
      name='keywords'
      content='front in sm, front-in, sm, frontinsm, front-end, frontend, santa maria, rs, rio grande do sul, evento, eventos, palestras, palestrantes, comunidade, tecnologia'
    />
    <meta itemprop='name' content='Front in SM' />
    <meta
      itemprop='description'
      content='O Front-in SM (Santa Maria) foi criado com a finalidade de reunir o maior número possível de pessoas interessadas em trocar conhecimento sobre tecnologias Web Front-End.'
    />
    <meta itemprop='image' content='/facebook.af29c3c3.jpg' />
    <MetaGoogle />
    <MetaFacebook />
    <MetaTwitter />
    <MetaIcons />
  </Helmet>
)

export default Meta
