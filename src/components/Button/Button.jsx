import React from 'react'
import PropTypes from 'prop-types'

import './Button.scss'

const propTypes = {
  to: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
}

const defaultProps = {
  type: 'button',
}

const securityProps = url => {
  return url.match(/http|https|www/)
    ? {
        rel: 'nofollow noopener',
        target: '_blank',
      }
    : {}
}

const Button = ({ to, children, type, ...rest }) =>
  to ? (
    <a href={to} className='button' {...rest} {...securityProps(to)}>
      {children}
    </a>
  ) : (
    <button type={type} className='button' {...rest}>
      {children}
    </button>
  )

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button
