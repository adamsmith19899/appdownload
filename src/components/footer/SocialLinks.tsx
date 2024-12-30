import React from 'react';
import { Twitter, Facebook, Instagram } from 'lucide-react';

export const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      <a href="#" className="hover:text-indigo-400 transition-colors">
        <Twitter className="h-5 w-5" />
      </a>
      <a href="#" className="hover:text-indigo-400 transition-colors">
        <Facebook className="h-5 w-5" />
      </a>
      <a href="#" className="hover:text-indigo-400 transition-colors">
        <Instagram className="h-5 w-5" />
      </a>
    </div>
  );
};