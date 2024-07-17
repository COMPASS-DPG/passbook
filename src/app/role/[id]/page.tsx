'use client';

import React, { useState } from 'react';
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
    activities: [],
    competencies: [],
  };
  if (rolesData !== null) {
    const roles: RoleDataType[] = JSON.parse(rolesData);
    const rolesList = roles.filter(
      (role) => role.id.toString() === params.id.toString()
    );
    data = rolesList[0];
  }
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the expansion state
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  const displayedActivities = isExpanded
    ? data.activities
    : data.activities.slice(0, 2);

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
          {data?.activities.length > 0 && (
            <div key={`${data.id}-role`} className='pb-2.5 text-sm font-normal'>
              <p>Activities pertaining to this role:</p>
              <ul className='pl-4'>
                {displayedActivities.map((activity, index) => (
                  <li key={`${data.id}-activity-${index}`} className='ml-2'>
                    {activity}
                  </li>
                ))}
              </ul>
              {/* Show "more" button if there are more than two activities and the list is not expanded */}
              {data.activities.length > 2 && !isExpanded && (
                <button
                  className='ml-6 text-blue-500'
                  onClick={toggleExpansion}
                >
                  More
                </button>
              )}
              {/* Show "less" button if the list is expanded */}
              {isExpanded && (
                <button
                  className='ml-6 text-blue-500'
                  onClick={toggleExpansion}
                >
                  Less
                </button>
              )}
            </div>
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
