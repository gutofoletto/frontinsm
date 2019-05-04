import React from 'react'

import { About, Banner, Features, Speakers } from '../components'

import './Home.scss'

const Home = () => (
  <main className='home'>
    <Banner />
    <About />
    <Features />
    <Speakers />
  </main>
)

export default Home
