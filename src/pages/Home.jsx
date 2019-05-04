import React from 'react'

import {
  About,
  Banner,
  Features,
  Speakers,
  Staff,
  Sponsors,
} from '../components'

import './Home.scss'

const Home = () => (
  <main className='home'>
    <Banner />
    <About />
    <Features />
    <Speakers />
    <Staff />
    <Sponsors />
  </main>
)

export default Home
