import React from 'react'
import Featured from './Featured'
import Hero from './Hero'
import Navbar from './Navbar'
import Features from './Features';
// import Login from './Login';
import Auth from './Auth';

export default function Home() {
  const [form, setForm] = React.useState<any>(null)
  const [open, setOpen] = React.useState<boolean>(false)
  return (
    <div>
    <Navbar form={form} setForm={setForm} open={open} setOpen={setOpen} />
    <Auth  form={form} setForm={setForm} open={open} setOpen={setOpen} />
    <div className='lg:container mx-auto w-full px-6 lg:h-screen'>
    <Hero />
    <Featured />
    </div>
    <Features />
    </div>
  )
}
