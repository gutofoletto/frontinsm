import React from 'react'
import Helmet from 'react-helmet'

import metadata from '../../data/meta'

const MetaTwitter = () => (
  <Helmet>
    <meta name='twitter:card' content={metadata.description} />
    <meta name='twitter:site' content='@frontinsm' />
    <meta name='twitter:title' content={metadata.title} />
    <meta name='twitter:description' content={metadata.description} />
    <meta name='twitter:creator' content='@frontinsm' />
    <meta
      name='twitter:image:src'
      content={`${process.env.PUBLIC_URL}/twitter.jpg`}
    />
  </Helmet>
)

export default MetaTwitter
