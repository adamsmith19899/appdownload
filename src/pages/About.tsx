import React from 'react';
import { Users, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
          
          <div className="space-y-12">
            <section className="prose lg:prose-lg mx-auto text-gray-600">
              <p className="lead text-xl">
                We're on a mission to transform how people manage their daily routines through innovative technology.
              </p>
              <p>
                Founded in 2024, our team of passionate developers and designers has been working tirelessly to create
                an app that makes life easier for millions of users worldwide.
              </p>
            </section>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Our Team</h3>
                <p className="text-gray-600">Dedicated professionals committed to excellence</p>
              </div>
              <div className="text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Our Mission</h3>
                <p className="text-gray-600">Making technology work for everyone</p>
              </div>
              <div className="text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Our Values</h3>
                <p className="text-gray-600">Innovation, integrity, and user focus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;