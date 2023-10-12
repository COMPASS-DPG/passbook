import Image from 'next/image';
import React from 'react';

import CustomAccordion from '@/components/Accordion/Accordion';
import { poppins } from '@/components/FontFamily';

import levelIcon from '../../../../public/images/levelIcon.png';

import { CompetencyType } from '@/types/type';

interface ChildProps {
  data: CompetencyType;
}

const RoleAccordion = ({ data }: ChildProps) => {
  return (
    <CustomAccordion title={data?.competency} levels={[]}>
      <div>
        <div className='flex items-center gap-2.5 py-5 text-[#272728]'>
          <div>
            <Image
              priority
              width={18}
              height={18}
              src={levelIcon}
              alt='level icon'
            />
          </div>
          <div className={`text-sm ${poppins.className} font-medium`}>
            Levels
          </div>
        </div>
        <div>
          <ul className='list-disc pl-4 text-sm font-normal text-[#272728]'>
            {data.levels.map((level, i) => (
              <li key={i} className='pb-4'>
                {level}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CustomAccordion>
  );
};

export default RoleAccordion;
