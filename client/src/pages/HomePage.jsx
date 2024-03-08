import React from 'react'
import HomeHero from '../components/HomeHero/HomeHero'
import Mission from '../components/Mission/Mission'
import AboutSection from '../components/AboutSection/AboutSection'
import ServicesSection from '../components/ServicesSection/ServicesSection'
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
    <Banner1 />
    <AboutSection />
    <ServicesSection />
    <Banner2 />
    <EventsSection />
    <Banner3 />
    <BlogsSection />
    <Banner4 />
    <PartnersSection />
    <TeamSection />
    <TestimonialSection />
    <ContactBanner />
    <Footer />
    </>
  )
}

export default HomePage