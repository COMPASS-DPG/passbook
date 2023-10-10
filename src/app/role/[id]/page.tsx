'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { RiVerifiedBadgeFill } from 'react-icons/ri';

import RoleAccordion from '@/components/competency/role/RoleAccordion';
import NoCompetencyError from '@/components/errorScreen/NoCompetencyError';
import { outfit, poppins } from '@/components/FontFamily';

import { roles } from '@/mockData/roleMock';

import { CompetencyType, RoleDataType } from '@/types/type';

const RoleDetails = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const data = roles?.find((item) => item.id === params.id) as
    | RoleDataType
    | undefined;

  const handleBack = () => {
    router.back();
  };

  return (
    <div className={`${outfit.className} w-full`}>
      <div className='flex items-center px-[22px] py-1.5'>
        <button
          className='mr-[15px] flex h-11 w-11 cursor-pointer 
        items-center justify-center rounded-md border-2 
        border-solid border-gray-200 hover:bg-gray-100'
          onClick={handleBack}
        >
          <MdOutlineKeyboardArrowLeft size={28} />
        </button>
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
            {data?.role}
          </p>
          {data?.roleDescription.map((des, i) => {
            return (
              <p key={i} className='pb-2.5 text-sm font-normal'>
                {des}
              </p>
            );
          })}
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
            {data?.competencies && data.competencies.length !== 0 ? (
              data?.competencies?.map((competency: CompetencyType, i) => {
                return (
                  <div key={i}>
                    <RoleAccordion data={competency} />
                  </div>
                );
              })
            ) : (
              <NoCompetencyError />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleDetails;
