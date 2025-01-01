import React from 'react';
import { Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
             Capcut Video Editing with AI-Powered Features
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              With its massive AI features, extensive effects, and filters, CapCut for PC is the ultimate solution for video editors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://drive.google.com/file/d/1vyIP_LHClmZVXFTRfS5Cs6VghDxFxsPK/view?usp=sharing" target="_blank" rel="noopener noreferrer">
  <button className="primary-btn group">
    <Download className="h-5 w-5 mr-2" />
    Download Now
  </button>
</a>
              <a href="#features" className="secondary-btn group">
                Learn More
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-3xl opacity-20"></div>
            <img 
              src="https://capcuttapk.pro/capcuthero.jpg" 
              alt="App Interface" 
              className="relative rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
