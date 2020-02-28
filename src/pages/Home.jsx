import './Home.scss'

import { Banner } from '../sections'
import React from 'react'
import content from '../data/content'

const Home = () => (
  <main className='home'>
    <Banner {...content.banner} />
  </main>
)

export default Home
