import React from 'react';

const DMCA = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">DMCA Policy</h1>
        
        <div className="space-y-6 text-gray-600">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Copyright Infringement Notice</h2>
            <p>If you believe that content available on our app infringes one or more of your copyrights, please notify us by submitting a written notice containing the information described below.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Required Information</h2>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>A physical or electronic signature of the copyright owner</li>
              <li>Identification of the copyrighted work claimed to have been infringed</li>
              <li>Identification of the material that is claimed to be infringing</li>
              <li>Contact information for the complaining party</li>
              <li>A statement that the complaining party has a good faith belief that use of the material is not authorized</li>
              <li>A statement that the information in the notification is accurate and, under penalty of perjury, that the complaining party is authorized to act on behalf of the copyright owner</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <p>DMCA notices can be sent to:</p>
            <div className="mt-2">
              <p>Legal Department</p>
              <p>AppName Inc.</p>
              <p>123 App Street</p>
              <p>San Francisco, CA 94105</p>
              <p>Email: dmca@appname.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DMCA;