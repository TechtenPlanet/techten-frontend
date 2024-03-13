import React from 'react'
import OtherPagesHero from './../components/OtherPagesHero/OtherPagesHero'
import Footer from './../components/Footer/Footer'
import Banner4 from './../components/Banner4/Banner4'
import Banner1 from './../components/Banner1/Banner1'
import MainEvents from '../components/MainEvents/MainEvents'
import PartnersSection from './../components/PartnersSection/PartnersSection'
import TestimonialSection from './../components/TestimonialSection/TestimonialSection'
import ContactBanner from './../components/ContactBanner/ContactBanner'

const EventsPage = () => {
  return (
    <>
    <OtherPagesHero heading="Events" />
    <Banner1 />
    <MainEvents />
    <Banner4 />
    <PartnersSection />
    <TestimonialSection />
    <ContactBanner />
    <Footer />
    </>
  )
}

export default EventsPage