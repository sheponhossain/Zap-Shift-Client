import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import illustration from '../../../assets/customer-top.png';

const CustomersReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/reviews.json')
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error('Error:', err));
  }, []);

  return (
    <div className="py-20 bg-[#F9FAFB] font-[Urbanist] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-6">
          <img
            src={illustration}
            alt="illustration"
            className="h-20 object-contain"
          />
        </div>

        <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">
          What our customers are sayings
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm mb-16 leading-relaxed">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro.
        </p>

        <div className="relative px-4">
          {reviews.length > 0 && (
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              autoplay={{ delay: 4000 }}
              /* Default Pagination Class Use Korchi */
              pagination={{
                clickable: true,
                dynamicBullets: true, // Library er built-in feature
              }}
              navigation={{ nextEl: '.next-btn', prevEl: '.prev-btn' }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-20 !static" // !static dile library pagination guchiye thake
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  {({ isActive }) => (
                    <div
                      className={`p-10 rounded-[32px] bg-white border-2 transition-all duration-500 text-left min-h-[300px] flex flex-col justify-between 
                      ${isActive ? 'border-blue-400 shadow-xl scale-105' : 'border-transparent opacity-40 scale-90'}`}
                    >
                      <div>
                        <FaQuoteLeft className="text-blue-200 text-4xl mb-6" />
                        <p className="text-gray-600 text-[15px] leading-relaxed">
                          {review.text || review.description}
                        </p>
                      </div>

                      <div className="border-t-2 border-dashed border-gray-100 pt-6 flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">
                          {review.name[0]}
                        </div>
                        <div>
                          <h4 className="font-bold text-primary">
                            {review.name}
                          </h4>
                          <p className="text-xs text-gray-400 font-medium uppercase">
                            {review.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {/* Navigation Controls (Tailwind Only) */}
          <div className="flex items-center justify-center gap-10 mt-6">
            <button className="prev-btn w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all cursor-pointer z-20">
              <FaArrowLeft className="text-primary" />
            </button>

            <button className="next-btn w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:opacity-80 transition-all cursor-pointer z-20">
              <FaArrowRight className="text-primary" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersReview;
