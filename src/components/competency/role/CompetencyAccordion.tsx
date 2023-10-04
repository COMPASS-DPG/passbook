import React from 'react';
import { RiVerifiedBadgeFill } from 'react-icons/ri';

import CustomAccordion from '@/components/Accordion/Accordion';
import { poppins } from '@/components/FontFamily';
const CompetencyAccordion = () => {
  return (
    <CustomAccordion title='dfsdfsf'>
      <div>
        <div className='flex items-center gap-2.5 py-5 text-[#272728]'>
          <div>
            <RiVerifiedBadgeFill size={18} />
          </div>
          <div className={`text-sm ${poppins.className} font-medium`}>
            Levels
          </div>
        </div>
        <div>
          <ul className='list-disc pl-4 text-sm font-normal text-[#272728]'>
            <li className='pb-4'>
              this is competency this is competency this is competency
            </li>
            <li className='pb-4'>this is competency</li>
            <li className='pb-4'>this is competency</li>
            <li className='pb-4'>this is competency this is competency</li>
            <li className='pb-4'>this is competency</li>
            <li className='pb-4'>
              this is competency this is competency this is competency
            </li>
            <li className='pb-4'>this is competency</li>
            <li className='pb-4'>this is competency</li>
            <li className='pb-4'>this is competency</li>
          </ul>
        </div>
      </div>
    </CustomAccordion>
  );
};

export default CompetencyAccordion;
