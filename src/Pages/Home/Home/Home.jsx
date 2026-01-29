import React from 'react';
import Banner from '../Banner/Banner';
import Works from '../Works/Works';
import { useLoaderData } from 'react-router';
import OurServices from '../OurServices/OurServices';

const Home = () => {
  const workData = useLoaderData();
  return (
    <>
      <Banner />
      <Works workData={workData} />
      <OurServices />
    </>
  );
};

export default Home;
