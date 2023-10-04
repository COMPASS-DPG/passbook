// components/Accordion.js
'use client';
import React, { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

type AccordionPropsType = {
  title: string;
  children: React.ReactNode;
  status?: string | null;
};

const CustomAccordion = ({
  title,
  children,
  status = null,
}: AccordionPropsType) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='mb-2 rounded-md border'>
      <div
        className='flex cursor-pointer justify-between p-2.5'
        onClick={toggleAccordion}
      >
        {status && <p></p>}
        <p className='text-base font-medium'>{title}</p>
        <div
          className={`${
            isOpen ? 'rotate-180' : 'rotate-0'
          } duration-10000 transition ease-in-out `}
        >
          <RiArrowDownSLine size={24} />
        </div>
      </div>
      <div
        className={`p-2.5 ${
          isOpen ? 'block' : 'hidden'
        } transition-max-height duration-10000 overflow-hidden ease-in-out`}
      >
        {children}
      </div>
    </div>
  );
};

export default CustomAccordion;
