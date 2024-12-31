import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
 {
  question: 'Is CapCut APK free to download?',
  answer: 'Yes, CapCut APK is free to download and use.'
},
{
  question: 'What are the minimum system requirements for CapCut APK?',
  answer: 'The minimum system requirements for CapCut APK include Android 5.0 or later, 2 GB RAM, and 100 MB free disk space.'
},
{
  question: 'Can I use CapCut APK for commercial purposes?',
  answer: 'Yes, CapCut APK can be used for commercial purposes, but some features may require a subscription or license.'
},
{
  question: 'How do I update CapCut APK?',
  answer: 'To update CapCut APK, visit the Google Play Store or the official website and download the latest version. Install the update and restart the app.'
},
{
  question: 'Does CapCut APK support 4K video editing?',
  answer: 'Yes, CapCut APK supports 4K video editing, allowing users to edit and export high-quality videos.'
},
{
  question: 'Can I import projects from other video editing software into CapCut APK?',
  answer: 'Yes, CapCut APK allows users to import projects from other video editing software, making it easy to switch to CapCut.'
},
{
  question: 'How do I export videos in CapCut APK?',
  answer: 'To export videos in CapCut APK, go to the "Export" menu, select your desired video format, resolution, and quality, and then tap "Export".'
},
{
  question: 'Can I add music to my videos in CapCut APK?',
  answer: 'Yes, CapCut APK allows you to add music to your videos from its built-in music library or from your device\'s music library.'
},
{
  question: 'How do I trim clips in CapCut APK?',
  answer: 'To trim clips in CapCut APK, select the clip you want to trim, then drag the edges of the clip to the desired length.'
},
{
  question: 'Can I use CapCut APK to edit vertical videos?',
  answer: 'Yes, CapCut APK allows you to edit vertical videos, making it perfect for editing videos shot on smartphones.'
}
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Find answers to common questions about our app</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-left">{faq.question}</span>
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
