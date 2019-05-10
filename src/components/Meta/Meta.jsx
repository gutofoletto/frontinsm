import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import MetaGoogle from './MetaGoogle'
import MetaFacebook from './MetaFacebook'
import MetaTwitter from './MetaTwitter'
import MetaIcons from './MetaIcons'

import metadata from '../../data/meta'

const Meta = () => (
  <Fragment>
    <Helmet>
      <meta name='application-name' content={metadata.title} />
      <meta name='theme-color' content={metadata.color} />
      <link
        rel='shortcut icon'
        href={`${process.env.PUBLIC_URL}/favicon/favicon.ico`}
      />
      <meta name='description' content={metadata.description} />
      <meta name='keywords' content={metadata.description} />
    </Helmet>
    <MetaGoogle />
    <MetaFacebook />
    <MetaTwitter />
    <MetaIcons />
  </Fragment>
)

export default Meta
