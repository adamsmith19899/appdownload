import React from 'react';

const Terms = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="space-y-6 text-gray-600">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <p>By accessing or using our app, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. User Responsibilities</h2>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Maintain the confidentiality of your account</li>
              <li>Provide accurate and complete information</li>
              <li>Use the service in compliance with all applicable laws</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Intellectual Property</h2>
            <p>All content, features, and functionality are owned by us and protected by international copyright, trademark, and other intellectual property laws.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;