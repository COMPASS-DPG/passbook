import Image from 'next/image';
import React from 'react';

import WpcasAccordion from '@/components/competency/wpcas/WpcasAccordion';

import { outfit } from '../../components/FontFamily';
import survey from '../../../public/svg/survey.png';

const Wpcas = () => {
  return (
    <div className='m-3 h-max'>
      <div className='flex h-28 space-x-4 p-2'>
        <div className='left w-3/5 rounded-lg border-orange-300 bg-amber-100 p-2'>
          <div>
            <h5 className={`font-medium ${outfit.className}`}>Overall WPCAS</h5>
          </div>
          <div className='flex space-x-4'>
            <h4 className={`text-2xl text-blue-950 ${outfit.className}`}>
              70%
            </h4>
            <div className='rounded bg-sky-200 p-1'>
              <h5 className='text-sm text-blue-800'>Aggregate %</h5>
            </div>
          </div>
          <div className='text-sm font-thin'>
            <p className={`text-gray-500 ${outfit.className}`}>
              Last updated on: Sep 7,2023
            </p>
          </div>
        </div>
        <div className='right relative w-2/5 cursor-pointer rounded-lg border-blue-900 bg-blue-200'>
          <div className='absolute -right-1 -top-2 h-5 w-5 rounded-full bg-red-600 text-center font-semibold text-white'>
            2
          </div>
          <Image
            src={survey}
            alt='My Image'
            className='mx-12'
            width={50}
            height={50}
          />
          <h6
            className={`w-15 mx-12 text-sm font-semibold text-blue-950 ${outfit.className}`}
          >
            Survey Others
          </h6>
        </div>
      </div>
      <WpcasAccordion />
      <WpcasAccordion />
      <WpcasAccordion />
      <WpcasAccordion />
      <WpcasAccordion />
      <WpcasAccordion />
    </div>
  );
};

export default Wpcas;
