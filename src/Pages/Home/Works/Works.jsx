import React from 'react';
import bookingIcon from '../../../assets/bookingIcon.png';

const Works = ({ workData }) => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 font-[Urbanist]">
      <h1 className="text-4xl font-extrabold text-primary mb-10 text-left">
        How it Works
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {workData?.map((work) => (
          <div
            key={work.id}
            className="bg-[#F8F9FA] p-8 rounded-[35px] flex flex-col items-start h-full min-h-[280px] transition-all duration-300 hover:shadow-xl group"
          >
            <div className="mb-5">
              <img
                src={bookingIcon}
                alt="icon"
                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-bold text-primary mb-2 leading-tight">
              {work.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {work.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
