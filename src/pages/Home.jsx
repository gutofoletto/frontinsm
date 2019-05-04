import React from 'react'

import { About, Banner, Features, Speakers, Staff } from '../components'

import './Home.scss'

const Home = () => (
  <main className='home'>
    <Banner />
    <About />
    <Features />
    <Speakers />
    <Staff />
  </main>
)

export default Home
