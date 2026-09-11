import React from 'react'
import { Outlet } from 'react-router'

import NavBar from './NavBar'
import Footer from './Footer'

export default function Rootlayout() {
  return (
    <>
    <NavBar />

    <div className='flex flex-1'> 
    < Outlet  />
    </div>

    <Footer />
    </>
  )
}
