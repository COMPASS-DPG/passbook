import React from 'react';

import { outfit } from '@/components/FontFamily';

import NoCompetencyErrorLogo from '~/svg/NoCompetencyErrorLogo.svg';

const NoCompetencyAssignError = () => {
  return (
    <div className='mt-[80px] text-center'>
      <div className='item-center mb-3 flex justify-center'>
        <NoCompetencyErrorLogo className='w-[80px]' />
      </div>
      <div
        className={`text-base font-normal 
      ${outfit.className} text-[#272728]`}
      >
        No Competencies found.
      </div>
    </div>
  );
};

export default NoCompetencyAssignError;
