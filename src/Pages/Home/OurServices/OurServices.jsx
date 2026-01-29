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
    <div className="bg-primary py-12 px-6 md:px-16 rounded-[40px] max-w-7xl mx-auto text-center my-10 font-[Urbanist]">
      <div>
        <div className="mb-10">
          <h2 className="text-white text-3xl md:text-4xl font-black mb-3">
            Our Services
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm opacity-80 leading-snug">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id || index}
              className={`
                p-6 md:p-8 rounded-[35px] flex flex-col items-center text-center transition-all duration-300
                ${index === 1 ? 'bg-secondary text-primary' : 'bg-white text-primary'}
                hover:scale-[1.02] cursor-pointer shadow-lg min-h-[260px] justify-center
              `}
            >
              <div className="w-14 h-14 bg-blue-50/50 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                <img
                  src={servicelogo}
                  alt={service.title}
                  className="w-9 h-9 object-contain"
                />
              </div>

              <h3 className="text-xl font-black mb-2 leading-tight">
                {service.title}
              </h3>

              <p
                className={`text-[13px] leading-relaxed px-4 ${index === 1 ? 'text-primary/80' : 'text-gray-500'}`}
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
