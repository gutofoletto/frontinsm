import React from 'react'

import { ReactComponent as Email } from '../../images/icon-email.svg'
import { ReactComponent as Facebook } from '../../images/icon-facebook.svg'
import { ReactComponent as Github } from '../../images/icon-github.svg'
import { ReactComponent as Medium } from '../../images/icon-medium.svg'
import { ReactComponent as Twitter } from '../../images/icon-twitter.svg'
import { ReactComponent as Development } from '../../images/icon-development.svg'
import { ReactComponent as Networking } from '../../images/icon-networking.svg'
import { ReactComponent as Technology } from '../../images/icon-technology.svg'

const Icon = ({ type, ...props }) => {
  switch (type) {
    case 'development':
      return <Development {...props} />
    case 'email':
      return <Email {...props} />
    case 'facebook':
      return <Facebook {...props} />
    case 'github':
      return <Github {...props} />
    case 'medium':
      return <Medium {...props} />
    case 'networking':
      return <Networking {...props} />
    case 'technology':
      return <Technology {...props} />
    case 'twitter':
      return <Twitter {...props} />
    default:
      return null
  }
}

export default Icon
