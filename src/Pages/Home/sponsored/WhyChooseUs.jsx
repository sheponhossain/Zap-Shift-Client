import React from 'react';
import LiveParcelTracking from '../../../assets/live-tracking.png';
import SafeDelivery from '../../../assets/safe-delivery.png';
const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: 'Live Parcel Tracking',
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pickup to delivery, monitor your shipment's journey.",
      image: LiveParcelTracking,
    },
    {
      id: 2,
      title: '100% Safe Delivery',
      description:
        'We ensure your parcels are handled with the utmost care and delivered securely to their destination. Reliable and damage-free.',
      image: SafeDelivery,
    },
    {
      id: 3,
      title: '24/7 Call Center Support',
      description:
        'Our dedicated support team is available around the clock to assist you with any questions or delivery concerns anytime.',
      image: SafeDelivery,
    },
  ];

  return (
    <section className="py-12 px-6 font-[Urbanist]">
      <div className="max-w-7xl mx-auto space-y-4">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col md:flex-row items-center bg-[#F8F9FA] rounded-[24px] px-8 py-6 md:py-4 gap-6 md:gap-12 border border-gray-100 min-h-[160px]"
          >
            <div className="w-full md:w-1/4 flex justify-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="h-20 md:h-24 object-contain"
              />
            </div>
            <div className="hidden md:block h-16 border-l-2 border-dashed border-gray-300"></div>
            <div className="w-full md:w-3/4 text-left">
              <h3 className="text-xl font-black text-primary mb-1">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-snug max-w-3xl">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
