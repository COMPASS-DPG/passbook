import React from 'react';

import { outfit } from '@/components/FontFamily';

import NotFoundLogo from '~/svg/notFoundLogo.svg';

const NoCompetencyFoundError = () => {
  return (
    <div className='mt-[80px] text-center'>
      <div className='mb-3 flex items-center justify-center'>
        <NotFoundLogo className='w-[150px]' />
      </div>
      <div
        className={`text-base font-normal 
      ${outfit.className} text-[#272728]`}
      >
        No Competencies found
      </div>
    </div>
  );
};

export default NoCompetencyFoundError;
