import React from 'react'
import HomeHero from '../components/HomeHero/HomeHero'
import Mission from '../components/Mission/Mission'
import AboutSection from '../components/AboutSection/AboutSection'
import ServicesSection from '../components/ServicesSection/ServicesSection'
import EventsSection from '../components/EventsSection/EventsSection'

const HomePage = () => {
  return (
    <>
    <HomeHero />
    <Mission />
    <AboutSection />
    <ServicesSection />
    <EventsSection />
    </>
  )
}

export default HomePage