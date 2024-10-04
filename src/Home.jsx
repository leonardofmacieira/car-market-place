import React from 'react'
import { Button } from './components/ui/button'
import { SignInButton } from '@clerk/clerk-react'
import Header from './components/Header'
import Hero from './components/Hero'
import Category from './components/Category'
import MostSearchCar from './components/MostSearchCar'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'

const Home = () => {
  return (
    <div>
        {/* Header */}
        <Header/>
        {/* Header */}
        <Hero/>
        {/* Category */}
        <Category/>
        {/* Most Search Car */}
        <MostSearchCar/>
        {/* Info Section */}
        <InfoSection/>
        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default Home
