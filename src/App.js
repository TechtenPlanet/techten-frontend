import React from 'react'
import './App.css';
import { Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Mission from './components/Mission/Mission';
import Benefit from './components/Benefits/Benefit';
import AboutSection from './components/AboutSection/AboutSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import Quote from './components/QuotesSection/Quote';
import Banner1 from './components/Banner1/Banner1';
import Banner2 from './components/Banner2/Banner2';
import PartnersSection from './components/PartnersSection/PartnersSection';
import ContactBanner from './components/ContactBanner/ContactBanner';
import Footer from './components/Footer/Footer';
import ContactUsContent from './components/ContactUsContent/ContactUsContent';



function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/Mission' element={ <Mission /> } />
        <Route path='/Benefit' element={ <Benefit /> } />
        <Route path='/Banner1' element={ <Banner1 /> } />
        <Route path='/AboutSection' element={ <AboutSection /> } />
        <Route path='/ServicesSection' element={ <ServicesSection /> } />
        <Route path='/Quote' element={ <Quote /> } />
        <Route path='/FocusSection' element={ <Banner2/> } />
        <Route path='/PartnersSection' element={ <PartnersSection /> } />
        <Route path='/ContactBanner' element={ <ContactBanner /> } />
        <Route path='/Footer' element={ <Footer /> } />
        <Route path='/Contact' element={ <ContactUsContent /> } />
    </Routes>
    </>
  );
}

export default App;
