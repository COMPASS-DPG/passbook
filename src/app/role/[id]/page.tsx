'use client';
import React from 'react';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { RiVerifiedBadgeFill } from 'react-icons/ri';

import CompetencyAccordion from '@/components/competency/role/CompetencyAccordion';
import { outfit, poppins } from '@/components/FontFamily';

import { roles } from '@/mockData/roleMock';

type RoleDataType = {
  id: string;
  role: string;
  status: string;
};

const page = ({ params }: { params: { id: string } }) => {
  const data = roles?.find((item) => item.id === params.id) as
    | RoleDataType
    | undefined;

  return (
    <div className={`${outfit.className} w-full`}>
      <div className='flex items-center gap-4 px-[22px] py-1.5'>
        <div className='flex h-11 w-11 items-center justify-center rounded-md border-2 border-solid border-gray-200'>
          <MdOutlineKeyboardArrowLeft size={28} />
        </div>
        <div className='text-xl font-semibold'>Roles</div>
      </div>
      <div className='p-[22px]'>
        <div>
          <p
            className={`pb-2.5 text-sm font-medium  
          ${data?.status.toLowerCase() === 'completed' && 'text-[#7DCC8A]'}
           ${data?.status.toLowerCase() === 'in progress' && 'text-[#FF9667]'}
        ${data?.status.toLowerCase() === 'yet to start' && 'text-[#787878]'}`}
          >
            {data?.status}
          </p>
          <p
            className={`pb-2.5 ${poppins.className} text-lg font-semibold lowercase `}
          >
            Provide Antenatal and Antepartum Services Through Outreach and at
            facility
          </p>
          <p className='pb-2.5 text-sm font-normal'>
            Follow up and ensure early registration of pregnant women
          </p>
        </div>
        <div>
          <div className='flex items-center gap-2.5 text-[#272728]'>
            <div>
              <RiVerifiedBadgeFill size={18} />
            </div>
            <div className={`text-base ${poppins.className} font-semibold`}>
              Competency
            </div>
          </div>
          <div className='my-5'>
            <CompetencyAccordion />
            <CompetencyAccordion />
            <CompetencyAccordion />
            <CompetencyAccordion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
