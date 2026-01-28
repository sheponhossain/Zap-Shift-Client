import React from 'react';
import logo from '../../assets/logo.png';

const Logo = () => {
  return (
    <div>
      <div className="flex  items-end">
        <img src={logo} alt="" />
        <h1 className="font-bold text-2xl -ms-4 ">ZapShift</h1>
      </div>
    </div>
  );
};

export default Logo;
