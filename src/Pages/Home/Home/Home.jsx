import React from 'react';
import Banner from '../Banner/Banner';
import Works from '../Works/Works';
import { useLoaderData } from 'react-router';
import OurServices from '../OurServices/OurServices';
import Sponsored from '../sponsored/sponsored';

const Home = () => {
  const workData = useLoaderData();
  return (
    <>
      <Banner />
      <Works workData={workData} />
      <OurServices />
      <Sponsored />
    </>
  );
};

export default Home;
