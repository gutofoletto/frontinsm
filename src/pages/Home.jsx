import React from 'react'
import {
  About,
  Banner,
  Faq,
  Features,
  Lead,
  Speakers,
  Sponsors,
  Staff,
  Tickets,
  Tips,
} from '../sections'

import './Home.scss'

const Home = () => (
  <main className='home'>
    <Banner />
    <Lead />
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
