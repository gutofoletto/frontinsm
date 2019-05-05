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
import Tips from '../components/Tips/Tips'

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
