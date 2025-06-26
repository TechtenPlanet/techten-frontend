import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ServicesPage from './pages/ServicesPage';
import EventsPage from './pages/EventsPage';
import BlogsPage from './pages/BlogsPage';
import ContactUsPage from './pages/ContactUsPage';
import ProgramsPage from './pages/ProgramsPage';
import ProjectThatMattersPage from './pages/ProjectThatMattersPage';
import TechLabsPage from './pages/TechLabsPage';
import HackathonsPage from './pages/HackathonsPage';
import ConsultantsPage from './pages/ConsultantsPage';
import TechForGirlsPage from './pages/TechForGirlsPage';
import ImpactPage from './pages/ImpactPage';
import DonatePage from './pages/DonatePage';
import DonationThankYouPage from './pages/DonationThankYouPage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import EnrollmentPage from './pages/EnrollmentPage';
import EventRegistrationPage from './pages/EventRegistrationPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import BlogDetail from './components/BlogDetail/BlogDetail';
import EventDetail from './components/EventDetail/EventDetail';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/programs/project-that-matters" element={<ProjectThatMattersPage />} />
        <Route path="/programs/tech-labs" element={<TechLabsPage />} />
        <Route path="/programs/hackathons" element={<HackathonsPage />} />
        <Route path="/programs/consultants" element={<ConsultantsPage />} />
        <Route path="/programs/tech-for-girls" element={<TechForGirlsPage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/donate/thank-you" element={<DonationThankYouPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/course/:id" element={<CourseDetailPage />} />
        <Route path="/enrollment" element={<EnrollmentPage />} />
        <Route path="/enrollment/:courseId" element={<EnrollmentPage />} />
        <Route path="/events/register/:eventId" element={<EventRegistrationPage />} />
        <Route path="/events/register/*" element={<EventRegistrationPage />} />
        <Route path="/get-involved" element={<GetInvolvedPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
