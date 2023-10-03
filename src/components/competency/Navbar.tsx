import React from 'react';

import { oxanium } from '../FontFamily';

const Navbar = () => {
  return (
    <div
      className={`flex w-full items-center justify-between border-b-2
     border-solid border-gray-100 p-5 text-2xl font-semibold text-[#65758C] ${oxanium.className}`}
    >
      Compass
    </div>
  );
};

export default Navbar;
