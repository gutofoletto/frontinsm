import React from 'react'

import { About, Banner, Features } from '../components'

import './Home.scss'

const Home = () => (
  <main className='home'>
    <Banner />
    <About />
    <Features />
  </main>
)

export default Home
