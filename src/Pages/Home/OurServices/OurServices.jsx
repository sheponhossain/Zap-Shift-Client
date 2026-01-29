import React, { useEffect, useState } from 'react';
import servicelogo from '../../../assets/service.png';

const OurServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/services.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="bg-primary py-20 px-6 rounded-3xl">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-black mb-6">
            Our Services
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id || index}
              className={`
                p-10 rounded-[40px] flex flex-col items-center text-center transition-all duration-300
                ${index === 1 ? 'bg-secondary text-primary' : 'bg-white text-primary'}
                hover:scale-[1.02] cursor-pointer shadow-xl
              `}
            >
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 overflow-hidden">
                <img
                  src={
                    servicelogo || 'https://i.ibb.co/vzPRm9M/service-icon.png'
                  }
                  alt={service.title}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-2xl font-black mb-4 leading-tight px-4">
                {service.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${index === 1 ? 'text-primary/80' : 'text-gray-500'}`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
