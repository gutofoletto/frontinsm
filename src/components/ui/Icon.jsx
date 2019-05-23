import React from 'react'

import { ReactComponent as Email } from '../../images/icon-email.svg'
import { ReactComponent as Facebook } from '../../images/icon-facebook.svg'
import { ReactComponent as Github } from '../../images/icon-github.svg'
import { ReactComponent as Medium } from '../../images/icon-medium.svg'
import { ReactComponent as Twitter } from '../../images/icon-twitter.svg'
import { ReactComponent as Development } from '../../images/icon-development.svg'
import { ReactComponent as Networking } from '../../images/icon-networking.svg'
import { ReactComponent as Technology } from '../../images/icon-technology.svg'
import { ReactComponent as Drink } from '../../images/icon-drink.svg'
import { ReactComponent as Pizza } from '../../images/icon-pizza.svg'
import { ReactComponent as Talk } from '../../images/icon-talk.svg'
import { ReactComponent as User } from '../../images/icon-user.svg'
import { ReactComponent as Coffee } from '../../images/icon-coffee.svg'

const Icon = ({ type, ...props }) => {
  switch (type) {
    case 'coffee':
      return <Coffee {...props} />
    case 'development':
      return <Development {...props} />
    case 'happyhour':
      return <Drink {...props} />
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
    case 'lunch':
      return <Pizza {...props} />
    case 'talk':
      return <Talk {...props} />
    case 'technology':
      return <Technology {...props} />
    case 'twitter':
      return <Twitter {...props} />
    case 'checkin':
      return <User {...props} />
    default:
      return null
  }
}

export default Icon
