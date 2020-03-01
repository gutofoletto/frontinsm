import React from 'react'
import PropTypes from 'prop-types'

import './Button.scss'

const propTypes = {
  to: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.string,
}

const defaultProps = {
  type: 'button',
  variant: 'primary',
}

const securityProps = url => {
  return url.match(/http|https|www/)
    ? {
        rel: 'nofollow noopener',
        target: '_blank',
      }
    : {}
}

const variants = {
  primary: '',
  secondary: 'button--secondary',
}

const Button = ({ to, children, type, variant, ...rest }) =>
  to ? (
    <a
      href={to}
      className={`button ${variants[variant]}`}
      {...rest}
      {...securityProps(to)}
    >
      {children}
    </a>
  ) : (
    <button type={type} className={`button ${variants[variant]}`} {...rest}>
      {children}
    </button>
  )

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button
