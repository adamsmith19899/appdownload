import React from 'react';
import Step from './Step';
import { steps } from './steps.data';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Get started with our app in three simple steps</p>
        </div>
        
        <div className="space-y-20">
          {steps.map((step, index) => (
            <Step
              key={index}
              {...step}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;