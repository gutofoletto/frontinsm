const linkComponent = url =>
  url
    ? {
        Component: 'a',
        href: url,
        target: '__blank',
        rel: 'noopener nofollow',
      }
    : { Component: 'div' }

export default linkComponent
