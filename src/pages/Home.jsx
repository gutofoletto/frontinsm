import React from 'react'
import {
  About,
  Banner,
  Features,
  Speakers,
  Staff,
  Sponsors,
  Faq,
  Tips,
} from '../sections'

import './Home.scss'

const Home = () => (
  <main className='home'>
    <Banner />
    <About />
    <Features />
    <Speakers />
    <Staff />
    <Sponsors />
    <Tips />
    <Faq />
  </main>
)

export default Home
