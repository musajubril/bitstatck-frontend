import React from 'react'
import Featured from './Featured'
import Hero from './Hero'
import Navbar from './Navbar'
import Features from './Features';

export default function Home() {
  return (
    <div>
    <Navbar />
    <div className='lg:container mx-auto w-full px-6 lg:h-screen'>
    <Hero />
    <Featured />
    </div>
    <Features />
    </div>
  )
}
