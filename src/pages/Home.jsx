import React from 'react'

import {
  About,
  Banner,
  Features,
  Speakers,
  Staff,
  Sponsors,
  Faq,
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
    <Faq />
  </main>
)

export default Home
