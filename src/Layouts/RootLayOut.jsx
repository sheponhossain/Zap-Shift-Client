import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Pages/Shared/NavBar/NavBar';
import Footer from '../Pages/Shared/Footer/Footer';

const RootLayOut = () => {
  return (
    <>
      <NavBar />
      <main className="max-w-7xl mx-auto min-h-[calc(100vh-395px)] overflow-y-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayOut;
