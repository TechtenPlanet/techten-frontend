import React from 'react';
import OtherPagesHero from '../components/OtherPagesHero/OtherPagesHero';
import DonationForm from '../components/DonationForm/DonationForm';

const DonatePage = () => {
  return (
    <>
      <OtherPagesHero heading="Donate" />
      <div className="container py-5">
        <h2 className="text-center mb-4">Support Our Mission</h2>
        <p className="text-center mb-5">
          Your generous donation helps us provide quality education and create opportunities for young people in Ghana.
          Every contribution, no matter the size, makes a significant impact on our programs and the lives of our students.
        </p>
        <DonationForm />
      </div>
    </>
  );
};

export default DonatePage;
