import React from 'react'
import OtherPagesHero from '../components/OtherPagesHero/OtherPagesHero'
import ContactUsContent from '../components/ContactUsContent/ContactUsContent'
import Footer from './../components/Footer/Footer'

const ContactUsPage = () => {
  return (
    <>
    <OtherPagesHero heading="Contact Us" />
    <ContactUsContent />
    <Footer />
    </>
  )
}

export default ContactUsPage