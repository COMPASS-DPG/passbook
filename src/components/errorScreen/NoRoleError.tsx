import React from 'react';

import { outfit } from '@/components/FontFamily';

import NotFoundLogo from '~/svg/NotFoundLogo.svg';

const NoRoleError = () => {
  return (
    <div className='mt-[80px] text-center'>
      <div className='item-center mb-3 flex justify-center'>
        <NotFoundLogo className='w-[150px] ' />
      </div>
      <div
        className={`text-base font-normal 
      ${outfit.className} text-[#272728]`}
      >
        No Role Found.
      </div>
    </div>
  );
};

export default NoRoleError;
