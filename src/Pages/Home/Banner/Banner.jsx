import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner1 from '../../../assets/banner/banner1.png';
import banner2 from '../../../assets/banner/banner2.png';
import banner3 from '../../../assets/banner/banner3.png';
import Buttons from '../../../Components/Button/Buttons';
import ArrowButton from '../../../Components/ArrowButton/ArrowButton';

const Banner = () => {
  return (
    <div className="w-full h-auto overflow-hidden">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        emulateTouch={true}
        className="main-carousel"
      >
        {[banner1, banner2, banner3].map((img, index) => (
          <div key={index} className="relative w-full">
            <div className="aspect-[4/3] sm:aspect-[16/9] md:h-[70vh] lg:h-[85vh] w-full">
              <img
                src={img}
                className="w-full h-full object-cover object-center"
                alt="banner"
              />
            </div>

            <div className="absolute inset-0 flex items-end bg-black/10">
              <div className="mb-6 md:mb-16 ml-4 md:ml-16 lg:ml-28 text-left">
                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                  <div className="flex items-center gap-2">
                    <Buttons className="rounded-[99px]">
                      Track Your Parcel
                    </Buttons>
                    <ArrowButton />
                  </div>

                  <div className="mt-1 sm:mt-0 text-white">
                    <Buttons className="rounded-xl" type="dark">
                      Be A Rider
                    </Buttons>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <style>{`
        .carousel .control-dots {
          margin-bottom: 20px;
          display: flex;
          justify-content: flex-start;
          padding-left: 20%; /* Desktop adjustment */
        }
        @media (max-width: 640px) {
          .carousel .control-dots { padding-left: 1rem; justify-content: center; }
        }
      `}</style>
    </div>
  );
};

export default Banner;
