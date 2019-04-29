import React, { Fragment } from 'react'

const MetaMs = () => (
  <Fragment>
    <meta name='msapplication-TileColor' content='#000000' />
    <meta
      name='msapplication-TileImage'
      content={`${process.env.PUBLIC_URL}/favicon/mstile-144x144.4433403a.png`}
    />
  </Fragment>
)

export default MetaMs
