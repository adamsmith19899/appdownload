import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StepProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  isReversed?: boolean;
}

export const Step: React.FC<StepProps> = ({ title, description, icon: Icon, image, isReversed = false }) => {
  return (
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
      <div className="flex-1 space-y-4">
        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
      <div className="flex-1">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity"></div>
          <img 
            src={image} 
            alt={title} 
            className="relative rounded-xl shadow-lg transform group-hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Step;