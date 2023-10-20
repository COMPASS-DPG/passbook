'use client';

import React from 'react';
import { RiVerifiedBadgeFill } from 'react-icons/ri';

import BackButtonNav from '@/components/competency/BackButtonNav';
import RoleAccordion from '@/components/competency/role/RoleAccordion';
import { outfit, poppins } from '@/components/FontFamily';

import { CompetencyType, RoleDataType } from '@/types/type';

const RoleDetails = ({ params }: { params: { id: string } }) => {
  const rolesData = localStorage.getItem('userRole');
  let data: RoleDataType = {
    id: 0,
    name: '',
    status: '',
    description: '',
    competencies: [],
  };
  if (rolesData !== null) {
    const roles: RoleDataType[] = JSON.parse(rolesData);
    const rolesList = roles.filter(
      (role) => role.id.toString() === params.id.toString()
    );
    data = rolesList[0];
  }

  return (
    <div className={`${outfit.className} w-full`}>
      <BackButtonNav heading='Roles' />
      <div className='px-[22px] pt-[75px]'>
        <div>
          <p
            className={`pb-2.5 text-sm font-medium  
          ${data?.status?.toLowerCase() === 'completed' && 'text-[#7DCC8A]'}
           ${data?.status?.toLowerCase() === 'in progress' && 'text-[#FF9667]'}
        ${data?.status?.toLowerCase() === 'yet to start' && 'text-[#787878]'}`}
          >
            {data?.status}
          </p>
          <p
            className={`pb-2.5 ${poppins.className} text-lg font-semibold lowercase `}
          >
            {data?.name}
          </p>
          {data?.description && (
            <p key={`${data.id}-role`} className='pb-2.5 text-sm font-normal'>
              {data.description}
            </p>
          )}
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
            {data?.competencies?.map((competency: CompetencyType, i) => {
              return (
                <div key={i}>
                  <RoleAccordion data={competency} />
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ height: '1200px' }}></div>
      </div>
    </div>
  );
};

export default RoleDetails;
