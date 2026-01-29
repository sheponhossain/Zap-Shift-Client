import React from 'react';
import Banner from '../Banner/Banner';
import Works from '../Works/Works';
import { useLoaderData } from 'react-router';
import OurServices from '../OurServices/OurServices';
import Sponsored from '../sponsored/sponsored';
import CustomersReview from '../customersReview/customersReview';

const Home = () => {
  const workData = useLoaderData();
  return (
    <>
      <Banner />
      <Works workData={workData} />
      <OurServices />
      <Sponsored />
      <CustomersReview />
    </>
  );
};

export default Home;
