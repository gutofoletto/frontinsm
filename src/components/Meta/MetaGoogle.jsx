import React from 'react'
import Helmet from 'react-helmet'

import metadata from '../../data/meta'

const MetaGoogle = () => (
  <Helmet>
    <meta itemprop='name' content={metadata.title} />
    <meta itemprop='description' content={metadata.description} />
    <meta itemprop='image' content={`${process.env.PUBLIC_URL}/facebook.jpg`} />
  </Helmet>
)

export default MetaGoogle
