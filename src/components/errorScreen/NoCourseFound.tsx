import React from 'react';

import { outfit } from '@/components/FontFamily';

import NotFoundIcon from '~/svg/notFoundIcon.svg';

// pass this component in ErrorModal as children
const NoCourseFound = () => {
  return (
    <div className='p-4 text-center'>
      <p className={`text-2xl font-semibold ${outfit.className} `}>Oops!</p>
      <div className='my-5 flex items-center justify-center '>
        <NotFoundIcon className='w-[150px]' />
      </div>
      <p
        className={`text-base font-normal text-[#65758C] ${outfit.className} `}
      >
        No Course Found
      </p>
    </div>
  );
};

export default NoCourseFound;
