import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';

import { outfit, poppins } from '@/components/FontFamily';

import { RoleDataType } from '@/types/type';

export type ChildProps = {
  data: RoleDataType;
};

const RoleCard = ({ data }: ChildProps) => {
  return (
    <div
      className='m-5 flex cursor-pointer items-center justify-between rounded-md border 
    border-solid border-[#e2e8f0] p-2.5'
    >
      <div>
        <p
          className={`${
            data?.status?.toLowerCase() === 'completed' && 'text-[#7DCC8A]'
          } ${data?.status?.toLowerCase() === 'in progress' && 'text-[#FF9667]'}
        ${
          data?.status?.toLowerCase() === 'yet to start' && 'text-[#787878]'
        } text-xs ${outfit.className} font-medium `}
        >
          {data.status}
        </p>
        <p className={`${poppins.className} text-sm font-semibold`}>
          {data.name}
        </p>
      </div>
      <div className='h-6 w-6 text-[#65758C] '>
        <RiArrowRightSLine size={24} />
      </div>
    </div>
  );
};

export default RoleCard;
