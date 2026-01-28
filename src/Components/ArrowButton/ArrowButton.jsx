import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ArrowButton = () => {
  return (
    <div className="relative inline-flex items-center group cursor-pointer">
      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#1A1A1A] flex items-center justify-center shrink-0 shadow-lg">
        {/* Arrow Icon (Lucide React) */}
        <ArrowUpRight size={32} strokeWidth={2.5} className="text-[#CAEB66]" />
      </div>
    </div>
  );
};

export default ArrowButton;
