import React from 'react';

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ title, children }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-white">{title}</h3>
      {children}
    </div>
  );
};