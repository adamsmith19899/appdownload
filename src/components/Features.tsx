import React from 'react';
import { Zap, Shield, Clock, Smartphone } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Powerful Editing',
    description: 'CapCut for PC offers powerful editing capabilities with extensive effects and filters.'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Keyframes and Graphs',
    description: 'The software allows users to create smoother and more precise animations using advanced keyframes and graphs.'
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: 'Script to Video',
    description: 'CapCut for PC features a comprehensive content creation tool driven by users.'
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: 'AI Writer',
    description: 'The software provides a solution for every step of the content creation process that requires text.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600">Discover what makes our app unique</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 text-indigo-600 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
