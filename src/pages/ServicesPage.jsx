import React from 'react'
import OtherPagesHero from '../components/OtherPagesHero/OtherPagesHero'
import Footer from './../components/Footer/Footer'
import MainServices from '../components/MainServices/MainServices'
import Banner1 from './../components/Banner1/Banner1'
import PartnersSection from './../components/PartnersSection/PartnersSection'
import TestimonialSection from './../components/TestimonialSection/TestimonialSection'
import ContactBanner from './../components/ContactBanner/ContactBanner'

const ServicesPage = () => {
  return (
    <>
    <OtherPagesHero heading="Services" />
    <MainServices />
    <Banner1 />
    <PartnersSection />
    <TestimonialSection />
    <ContactBanner />
    <Footer />
    </>
  )
}

export default ServicesPage