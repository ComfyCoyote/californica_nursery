import { Inter } from 'next/font/google'
import React from 'react'
import AltLandingPage from '@/components/landing/alt-landing-page'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <React.Fragment>
      <AltLandingPage />
    </React.Fragment>
  )
}
