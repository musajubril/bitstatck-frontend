import React from 'react'
import Contact from './Contact'
import Content from './Content'
import CTA from './CTA'
import FAQ from './FAQ'
import Features from './Features'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import Newsletter from './Newsletter'
import Teams from './Teams'

export default function Landing() {
  return (
    <>
    <Hero />
    <Features />
    <Content />
    <Newsletter />
    <Header />
    <CTA />
    <FAQ />
    <Teams />
    <Contact />
    <Footer />
    </>
  )
}
