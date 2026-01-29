import React from 'react';
import Marquee from 'react-fast-marquee';

const Sponsored = () => {
  const logos = [
    'https://upload.wikimedia.org/wikipedia/commons/b/b8/Casio_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_2015_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
  ];

  return (
    <div className="py-16 bg-[#EAECED] font-[Urbanist]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-2xl md:text-3xl font-black text-primary mb-12">
          We've helped thousands of sales teams
        </h2>
        <Marquee
          speed={50}
          gradient={true}
          gradientColor="#EAECED"
          gradientWidth={100}
        >
          <div className="flex items-center gap-12 md:gap-24">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={logo}
                  alt="brand logo"
                  className="h-8 md:h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Sponsored;
