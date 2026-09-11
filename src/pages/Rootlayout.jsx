import React from 'react'
import { Outlet } from 'react-router'

import NavBar from './NavBar'

export default function Rootlayout() {
  return (
    <>
    <NavBar />

    < Outlet />
    </>
  )
}
