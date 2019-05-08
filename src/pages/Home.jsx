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

import content from '../data/content'

import './Home.scss'

const Home = () => (
  <main className='home'>
    <Banner {...content.banner} />
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
