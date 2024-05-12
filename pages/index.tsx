import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/layout/navbar'
import React from 'react'
import LandingPage from '@/components/landing_page'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <React.Fragment>
      <LandingPage />
    </React.Fragment>
  )
}
