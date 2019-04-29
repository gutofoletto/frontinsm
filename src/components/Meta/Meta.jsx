import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import MetaGoogle from './MetaGoogle'
import MetaFacebook from './MetaFacebook'
import MetaTwitter from './MetaTwitter'
import MetaIcons from './MetaIcons'

const Meta = () => (
  <Fragment>
    <Helmet>
      <meta name='application-name' content='Front in Santa Maria' />
      <meta name='theme-color' content='#1cd000' />
      <link
        rel='shortcut icon'
        href={`${process.env.PUBLIC_URL}/favicon/favicon.ico`}
      />
      <meta
        name='description'
        content='O Front-in SM (Santa Maria) foi criado com a finalidade de reunir o maior número possível de pessoas interessadas em trocar conhecimento sobre tecnologias Web Front-End.'
      />
      <meta
        name='keywords'
        content='front in sm, front-in, sm, frontinsm, front-end, frontend, santa maria, rs, rio grande do sul, evento, eventos, palestras, palestrantes, comunidade, tecnologia'
      />
    </Helmet>
    <MetaGoogle />
    <MetaFacebook />
    <MetaTwitter />
    <MetaIcons />
  </Fragment>
)

export default Meta
