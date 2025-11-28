import React from 'react';
import Hero from '../components/Hero';
import QuickBooking from '../components/QuickBooking';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Doctors from '../components/Doctors';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <main>
      <Hero />
      <QuickBooking />
      <Services />
      <WhyChooseUs />
      <Doctors />
      <Testimonials />
      <CTA />
    </main>
  );
};

export default Home;
