import React from 'react'

import { ReactComponent as Email } from '../../images/icon-email.svg'
import { ReactComponent as Facebook } from '../../images/icon-facebook.svg'
import { ReactComponent as Github } from '../../images/icon-github.svg'
import { ReactComponent as Medium } from '../../images/icon-medium.svg'
import { ReactComponent as Twitter } from '../../images/icon-twitter.svg'

const Icon = ({ type }) => {
  switch (type) {
    case 'email':
      return <Email />
    case 'facebook':
      return <Facebook />
    case 'github':
      return <Github />
    case 'medium':
      return <Medium />
    case 'twitter':
      return <Twitter />
    default:
      return null
  }
}

export default Icon
