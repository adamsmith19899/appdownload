import React from 'react';

const Privacy = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-600">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
            <p>We collect information you provide directly to us when using our app, including:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Account information (email, name, preferences)</li>
              <li>Usage data and interaction with our services</li>
              <li>Device information and technical data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Improve user experience</li>
              <li>Send important updates and notifications</li>
              <li>Protect against misuse and fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;