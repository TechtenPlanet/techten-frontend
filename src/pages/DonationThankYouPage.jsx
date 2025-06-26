import React from 'react';
import { Link } from 'react-router-dom';
import OtherPagesHero from '../components/OtherPagesHero/OtherPagesHero';
import { FaCheckCircle, FaArrowLeft } from 'react-icons/fa';

const DonationThankYouPage = () => {
  return (
    <>
      <OtherPagesHero heading="Thank You" />
      <div className="container py-5">
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '2rem',
          textAlign: 'center',
          backgroundColor: '#f8f9fa',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }}>
          <FaCheckCircle style={{ 
            fontSize: '4rem', 
            color: '#28a745',
            marginBottom: '1.5rem'
          }} />
          
          <h2 style={{ marginBottom: '1.5rem', color: '#0a1172' }}>
            Thank You for Your Donation!
          </h2>
          
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Your generous contribution will help us continue our mission to provide quality education 
            and create opportunities for young people in Ghana.
          </p>
          
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            A confirmation email has been sent to your email address with the details of your donation.
          </p>
          
          <div style={{ marginTop: '2rem' }}>
            <Link to="/" style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#0a1172',
              color: 'white',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: '600',
              marginRight: '1rem'
            }}>
              <FaArrowLeft style={{ marginRight: '0.5rem' }} />
              Return to Home
            </Link>
            
            <Link to="/impact" style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.75rem 1.5rem',
              backgroundColor: 'transparent',
              color: '#0a1172',
              border: '1px solid #0a1172',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: '600'
            }}>
              See Our Impact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonationThankYouPage;
