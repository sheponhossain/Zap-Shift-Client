import React from 'react';

const Buttons = ({ children, type = 'lime', className = '' }) => {
  const isLime = type === 'lime';

  const colors = {
    bg: isLime ? 'bg-[#caeb66]' : 'bg-[#03373D]',
    border: isLime ? 'border-[#caeb66]' : 'border-[#03373D]',
    text: isLime ? 'text-black' : 'text-03373D',
    hoverText: isLime
      ? 'group-hover:text-[#caeb66]'
      : 'group-hover:text-[#03373D]',
  };

  return (
    <button
      className={`
      relative 
      px-5 py-2.5 md:px-8 md:py-4 
      text-sm md:text-base 
      font-bold ${colors.text} 
      transition-colors duration-500 
      bg-transparent border-2 ${colors.border} 
      group ${colors.hoverText} 
      overflow-hidden 
      w-fit 
      whitespace-nowrap 
      cursor-pointer
      inline-flex items-center justify-center
      ${className}
    `}
    >
      <span
        className={`absolute top-0 left-0 w-1/2 h-full ${colors.bg} transition-transform duration-500 ease-in-out group-hover:-translate-x-full z-0`}
      ></span>

      <span
        className={`absolute top-0 right-0 w-1/2 h-full ${colors.bg} transition-transform duration-500 ease-in-out group-hover:translate-x-full z-0`}
      ></span>
      <span className="relative z-10 pointer-events-none">{children}</span>
    </button>
  );
};

export default Buttons;
