import React from 'react'
import HomeHero from '../components/HomeHero/HomeHero'
import Mission from '../components/Mission/Mission'
import Benefit from '../components/Benefits/Benefit'
import AboutSection from '../components/AboutSection/AboutSection'
import ServicesSection from '../components/ServicesSection/ServicesSection'
import FocusSection from '../components/FocusSection/FocusSection'
import EventsSection from '../components/EventsSection/EventsSection'
import Banner1 from '../components/Banner1/Banner1'
import Banner2 from '../components/Banner2/Banner2'
import Banner3 from '../components/Banner3/Banner3'
import BlogsSection from '../components/BlogSection/BlogSection'
import Banner4 from '../components/Banner4/Banner4'
import PartnersSection from '../components/PartnersSection/PartnersSection'
import TeamSection from '../components/TeamSection/TeamSection'
import TestimonialSection from '../components/TestimonialSection/TestimonialSection'
import ContactBanner from '../components/ContactBanner/ContactBanner'
import Footer from '../components/Footer/Footer'

const HomePage = () => {
  return (
    <>
    <HomeHero />
    <Mission />
    <Benefit />
    <Banner1 />
    <AboutSection />
    <ServicesSection />
    <Banner2 />
    <PartnersSection />
    <ContactBanner />
    <Footer />
    </>
  )
}

export default HomePage