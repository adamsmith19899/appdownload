import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone } from 'lucide-react';
import { FooterSection } from './footer/FooterSection';
import { NewsletterForm } from './footer/NewsletterForm';
import { SocialLinks } from './footer/SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FooterSection title="">
            <div className="flex items-center space-x-2">
              <Smartphone className="h-8 w-8 text-indigo-400" />
              <span className="text-xl font-bold text-white">Capcut Apk</span>
            </div>
            <p className="text-sm">Transform your daily routine with our innovative app solution.</p>
            <SocialLinks />
          </FooterSection>

          <FooterSection title="Quick Links">
            <ul className="space-y-2">              
              <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><a href="#faqs" className="hover:text-indigo-400 transition-colors">FAQs</a></li>
              <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link></li>
            </ul>
          </FooterSection>

          <FooterSection title="Legal">
            <ul className="space-y-2">
              <li><Link to="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-indigo-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/dmca" className="hover:text-indigo-400 transition-colors">DMCA</Link></li>
            </ul>
          </FooterSection>

          <FooterSection title="Stay Updated">
            <p className="text-sm mb-4">Subscribe to our newsletter for updates and tips.</p>
            <NewsletterForm />
          </FooterSection>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} AppName. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
