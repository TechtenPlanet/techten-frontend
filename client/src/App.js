import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs'
import EventsPage from './pages/EventsPage'
import BlogsPage from './pages/BlogsPage'
import ServicesPage from './pages/ServicesPage'
import GalleryPage from './pages/GalleryPage'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/about-us' element={ <AboutUs /> } />
        <Route path='/events' element={ <EventsPage /> } />
        <Route path='/blogs' element={ <BlogsPage /> } />
        <Route path='/services' element={ <ServicesPage /> } />
        <Route path='/gallery' element={ <GalleryPage /> } />
      </Routes>
    </Router>
    </>
  );
}

export default App;
