import React from 'react';
import Marquee from 'react-fast-marquee';
import WhyChooseUs from './WhyChooseUs';

const Sponsored = () => {
  const logos = [
    {
      name: 'Casio',
      url: 'https://i.ibb.co.com/hFhbVjTz/download-4-removebg-preview.png',
    },
    {
      name: 'Amazon',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    },
    {
      name: 'Moonstar',
      url: 'https://i.ibb.co.com/rGqD15xH/download-5-removebg-preview.png',
    },
    {
      name: 'Star+',
      url: 'https://i.ibb.co.com/wNrmNb00/download-6-removebg-preview.png',
    },
    {
      name: 'StartPeople',
      url: 'https://i.ibb.co.com/N2W6mWzv/download-7-removebg-preview.png',
    },
    {
      name: 'Randstad',
      url: 'https://i.ibb.co.com/JWSJcV6T/download-8-removebg-preview.png',
    },
  ];

  return (
    <div className="py-16 bg-[#EAECED] font-[Urbanist]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-black text-primary mb-12">
          We've helped thousands of sales teams
        </h2>

        <Marquee speed={40} gradient={false} pauseOnHover={false}>
          <div className="flex items-center gap-10 md:gap-20 pr-10">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-32 md:w-44 h-16 md:h-20"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="max-h-full max-w-full object-contain overflow-hidden"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="border-t-2 border-dashed border-primary/20 w-full"></div>
      </div>
      <WhyChooseUs />
    </div>
  );
};

export default Sponsored;
