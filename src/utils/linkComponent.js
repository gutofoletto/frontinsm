const linkComponent = url =>
  url
    ? {
        Component: 'a',
        href: url,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : { Component: 'div' }

export default linkComponent
