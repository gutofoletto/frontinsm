import './Home.scss'

import {
  About,
  Banner,
  Faq,
  Features,
  Lead,
  Speakers,
  Sponsors,
  Staff,
} from '../sections'

import Partners from '../sections/Partners'
import Program from '../sections/Program'
import React from 'react'
import content from '../data/content'

const Home = () => (
  <main className='home'>
    <Banner {...content.banner} />
    <Lead />
    <About />
    <Features />
    <Speakers />
    <Program />
    <Sponsors />
    <Faq />
    <Staff />
    <Partners />
  </main>
)

export default Home
