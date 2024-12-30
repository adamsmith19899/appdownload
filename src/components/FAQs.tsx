import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Is CapCut for PC free?',
    answer: 'Yes, CapCut for PC is free to download and use.'
  },
  {
    question: 'What are the system requirements for CapCut for PC?',
    answer: 'The system requirements for CapCut for PC include Windows 10/11, 64-bit processor, 4 GB RAM, and 2 GB free disk space.'
  },
  {
    question: 'Can I use CapCut for PC for commercial purposes?',
    answer: 'Yes, CapCut for PC can be used for commercial purposes, but some features may require a subscription or license.'
  },
  {
    question: 'How do I update CapCut for PC?',
    answer: 'To update CapCut for PC, visit the official website and download the latest version. Install the update and restart the software.'
  },
  {
    question: 'Does CapCut for PC support 4K video editing?',
    answer: 'Yes, CapCut for PC supports 4K video editing, allowing users to edit and export high-quality videos.'
  },
  {
    question: 'Can I import projects from other video editing software into CapCut for PC?',
    answer: 'Yes, CapCut for PC allows users to import projects from other video editing software, making it easy to switch to CapCut.'
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
