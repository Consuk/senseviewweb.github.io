import React from 'react';
import "./home.css";
import HeroSection from './HeroSection';
import ImageCarouselSection from './ImageCarouselSection';
import BenefitsSection from './BenefitsSection';
import GiantCardSection from './GiantCardSection';
import MeetingSection from './MeetingSection.js';
import TestimonialsSection from './TestimonialsSection.js';

const Home = () => {
  return (
    <div className="column-container">
      <HeroSection />
      <ImageCarouselSection />
      <BenefitsSection />
      <GiantCardSection />
      <TestimonialsSection />
      <MeetingSection />
    </div>
  );
};

export default Home;
