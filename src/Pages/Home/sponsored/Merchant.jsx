import React from 'react';
import illustration from '../../../assets/cta-box-illustration.png'; // Illustration image-ta ekhane nio

const Merchant = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 font-[Urbanist]">
      <div className="relative bg-primary rounded-[40px] overflow-hidden p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
          <svg
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover"
          >
            <path
              d="M0,1000 C300,800 400,200 1000,0 L1000,1000 Z"
              fill="white"
              fillOpacity="0.1"
            />
          </svg>
        </div>

        <div className="relative z-10 w-full md:w-1/2 text-left">
          <h2 className="text-white text-3xl md:text-5xl font-black leading-tight mb-6">
            Merchant and Customer Satisfaction is Our First Priority
          </h2>
          <p className="text-gray-300 text-sm md:text-base mb-10 max-w-lg leading-relaxed">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. ZapShift courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-secondary text-primary px-8 py-4 rounded-full font-bold text-base hover:opacity-90 transition-all">
              Become a Merchant
            </button>
            <button className="border-2 border-secondary text-secondary px-8 py-4 rounded-full font-bold text-base hover:bg-secondary hover:text-primary transition-all">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>
        <div className="relative z-10 w-full md:w-1/3 flex justify-center md:justify-end">
          <img
            src={illustration}
            alt="Delivery Illustration"
            className="w-full max-w-[350px] object-contain transform md:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default Merchant;
