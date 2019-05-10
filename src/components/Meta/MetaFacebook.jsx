import React from 'react'
import Helmet from 'react-helmet'

import metadata from '../../data/meta'

const MetaFacebook = () => (
  <Helmet>
    <meta property='og:url' content={metadata.url} />
    <meta property='og:title' content={metadata.title} />
    <meta property='og:description' content={metadata.description} />
    <meta property='og:site_name' content={metadata.title} />
    <meta
      property='og:image'
      content={`${process.env.PUBLIC_URL}/facebook.jpg`}
    />
    <meta property='og:locale' content='pt_BR' />
  </Helmet>
)

export default MetaFacebook
