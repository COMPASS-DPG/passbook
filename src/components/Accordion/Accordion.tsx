// components/Accordion.js
'use client';
import React, { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

import { outfit } from '@/components/FontFamily';

type AccordionPropsType = {
  title: string;
  children: React.ReactNode;
  status?: string | null;
  level?: boolean | null;
};

const CustomAccordion = ({
  title,
  children,
  status = null,
  level = null,
}: AccordionPropsType) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='mb-2 rounded-md border p-2.5 '>
      {status && (
        <span className='rounded bg-sky-200 px-2.5 py-0.5 text-xs font-normal text-blue-800'>
          {status}
        </span>
      )}
      <div
        className='flex cursor-pointer justify-between '
        onClick={toggleAccordion}
      >
        <p className='text-base font-medium'>{title}</p>
        <div
          className={`${
            isOpen ? 'rotate-180' : 'rotate-0'
          } transition duration-300  `}
        >
          {!level && <RiArrowDownSLine size={24} />}
        </div>
      </div>
      {level && (
        <div>
          <p className={`text-sm font-semibold  ${outfit.className} my-2`}>
            Levels
          </p>
          <div className='flex flex-row gap-x-0.5'>
            <div className='basis-1/4 bg-green-400 text-center'>1</div>
            <div className='basis-1/4 bg-green-400 text-center'>2</div>
            <div className='basis-1/4 bg-yellow-200 text-center'>3</div>
            <div className='basis-1/4 bg-orange-400 text-center'>4</div>
            <div className='basis-1/4 bg-gray-200 text-center'>5</div>
            <div className='basis-1/4'>
              <div className='cursor-pointer ' onClick={toggleAccordion}>
                <div
                  className={`${
                    isOpen ? 'rotate-180' : 'rotate-0'
                  } flex items-center justify-center transition duration-300`}
                >
                  <RiArrowDownSLine size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className={`p-2.5 ${
          isOpen ? 'block' : 'hidden'
        } overflow-hidden transition duration-300 `}
      >
        {children}
      </div>
      {level && (
        <div className='my-4 flex justify-between gap-4'>
          <button
            className={`h-9 w-1/2 rounded bg-[#EEF5FF] text-[#385B8B] ${outfit.className} text-sm font-semibold`}
          >
            View Courses
          </button>
          <button
            className={`h-9 w-1/2 rounded bg-[#385B8B] text-[#FFF] ${outfit.className} text-sm font-semibold`}
          >
            Assess
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomAccordion;
