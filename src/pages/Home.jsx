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
    <Sponsors />
    <Faq />
    <Staff />
  </main>
)

export default Home
