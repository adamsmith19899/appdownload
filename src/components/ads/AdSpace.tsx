import React from 'react';

interface AdSpaceProps {
  slot: string;
  format?: 'auto' | 'horizontal' | 'vertical' | 'rectangle';
}

const AdSpace: React.FC<AdSpaceProps> = ({ slot, format = 'auto' }) => {
  return (
    <div className="w-full py-8 flex justify-center items-center bg-gray-50">
      <div 
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Replace with actual ad client ID
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdSpace;