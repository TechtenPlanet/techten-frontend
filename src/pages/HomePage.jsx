import React from 'react'
import HomeHero from '../components/HomeHero/HomeHero'
import Mission from '../components/Mission/Mission'
import Benefit from '../components/Benefits/Benefit'
import AboutSection from '../components/AboutSection/AboutSection'
import ServicesSection from '../components/ServicesSection/ServicesSection'
import Banner1 from '../components/Banner1/Banner1'
import Banner2 from '../components/Banner2/Banner2'
import PartnersSection from '../components/PartnersSection/PartnersSection'
import ContactBanner from '../components/ContactBanner/ContactBanner'
import Footer from '../components/Footer/Footer'
import Quote from '../components/QuotesSection/Quote'
import ContactUs from '../components/ContactUsContent/ContactUsContent'

const HomePage = () => {
  return (
    <>
    <HomeHero />
    <Mission />
    <Benefit />
    <Banner1 />
    <AboutSection />
    <Quote />
    <ServicesSection />
    <Banner2 />
    <ContactBanner />
    <PartnersSection />
    <ContactUs />
    <Footer />
    </>
  )
}

export default HomePage