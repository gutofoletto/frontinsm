import React from 'react'
import {
  About,
  Banner,
  Features,
  Speakers,
  Staff,
  Sponsors,
  Faq,
  Tickets,
  Tips,
} from '../sections'

import './Home.scss'

const Home = () => (
  <main className='home'>
    <Banner />
    <About />
    <Features />
    <Speakers />
    <Tickets />
    <Staff />
    <Sponsors />
    <Tips />
    <Faq />
  </main>
)

export default Home
