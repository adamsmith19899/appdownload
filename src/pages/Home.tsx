import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/how-it-works/HowItWorks';
import FAQs from '../components/FAQs';
import AdSpace from '../components/ads/AdSpace';

const Home = () => {
  return (
    <>
      <Hero />
      <AdSpace slot="hero-bottom-ad" />
      <Features />
      <AdSpace slot="features-bottom-ad" />
      <HowItWorks />
      <AdSpace slot="how-it-works-bottom-ad" />
      <FAQs />
      <AdSpace slot="faqs-bottom-ad" />
    </>
  );
};

export default Home;