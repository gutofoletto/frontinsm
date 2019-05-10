import React, { Fragment } from 'react'

import metadata from '../../data/meta'

const MetaMs = () => (
  <Fragment>
    <meta name='msapplication-TileColor' content={metadata.color} />
    <meta
      name='msapplication-TileImage'
      content={`${process.env.PUBLIC_URL}/favicon/mstile-144x144.4433403a.png`}
    />
  </Fragment>
)

export default MetaMs
