import React from 'react'
import Helmet from 'react-helmet'

const MetaIcons = () => (
  <Helmet>
    <link
      rel='apple-touch-icon-precomposed'
      sizes='57x57'
      href={`${process.env.PUBLIC_URL}/favicon/apple-touch-icon-57x57.png`}
    />
    <link
      rel='apple-touch-icon-precomposed'
      sizes='114x114'
      href={`${process.env.PUBLIC_URL}/favicon/apple-touch-icon-114x114.png`}
    />
    <link
      rel='apple-touch-icon-precomposed'
      sizes='72x72'
      href={`${process.env.PUBLIC_URL}/favicon/apple-touch-icon-72x72.png`}
    />
    <link
      rel='apple-touch-icon-precomposed'
      sizes='144x144'
      href={`${process.env.PUBLIC_URL}/favicon/apple-touch-icon-144x144.png`}
    />
    <link
      rel='apple-touch-icon-precomposed'
      sizes='120x120'
      href={`${process.env.PUBLIC_URL}/favicon/apple-touch-icon-120x120.png`}
    />
    <link
      rel='apple-touch-icon-precomposed'
      sizes='152x152'
      href={`${process.env.PUBLIC_URL}/favicon/apple-touch-icon-152x152.png`}
    />
    <link
      rel='icon'
      type='image/png'
      href={`${process.env.PUBLIC_URL}/favicon/favicon-32x32.png`}
      sizes='32x32'
    />
    <link
      rel='icon'
      type='image/png'
      href={`${process.env.PUBLIC_URL}/favicon/favicon-16x16.png`}
      sizes='16x16'
    />
  </Helmet>
)

export default MetaIcons
