import React from 'react';
import { Send } from 'lucide-react';

export const NewsletterForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="email"
        placeholder="Enter your email"
        className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        type="submit"
        className="bg-indigo-600 px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition-colors"
      >
        <Send className="h-5 w-5" />
      </button>
    </form>
  );
};