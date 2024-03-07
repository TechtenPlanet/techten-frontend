import React from 'react'
import HomeHero from '../components/HomeHero/HomeHero'
import Mission from '../components/Mission/Mission'
import AboutSection from '../components/AboutSection/AboutSection'
import ServicesSection from '../components/ServicesSection/ServicesSection'
import EventsSection from '../components/EventsSection/EventsSection'
import Banner1 from '../components/Banner1/Banner1'

const HomePage = () => {
  return (
    <>
    <HomeHero />
    <Mission />
    <Banner1 />
    <AboutSection />
    <ServicesSection />
    <EventsSection />
    </>
  )
}

export default HomePage