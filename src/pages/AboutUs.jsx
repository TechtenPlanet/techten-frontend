import React from 'react'
import OtherPagesHero from '../components/OtherPagesHero/OtherPagesHero'
import Footer from '../components/Footer/Footer'
import Mission from './../components/Mission/Mission'
import MainAboutus from '../components/MainAboutus/MainAboutus'
import Banner1 from './../components/Banner1/Banner1'
import PartnersSection from './../components/PartnersSection/PartnersSection'
import Banner2 from './../components/Banner2/Banner2'
import TestimonialSection from './../components/TestimonialSection/TestimonialSection'
import ContactBanner from './../components/ContactBanner/ContactBanner'

const AboutUs = () => {
  return (
    <>
    <OtherPagesHero heading="About Us" />
    <Mission />
    <MainAboutus />
    <Banner1 />
    <PartnersSection />
    <Banner2 />
    <TestimonialSection />
    <ContactBanner />
    <Footer />
    </>
  )
}

export default AboutUs