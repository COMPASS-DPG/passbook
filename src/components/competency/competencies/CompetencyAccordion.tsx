import React from 'react';

import CustomAccordion from '@/components/Accordion/Accordion';
import { outfit } from '@/components/FontFamily';

// type Props = {}

const CompetencyAccordion = () => {
  return (
    <CustomAccordion title='Pregnancy Identification' level={true}>
      <div>
        <div className='flex items-center gap-2.5 text-[#272728]'>
          <div className={`text-sm ${outfit.className}  font-semibold`}>
            Logs
          </div>
        </div>
        <ul className='text-sm font-normal text-[#272728]'>
          <li>
            <div className={`pt-2 ${outfit.className} text-sm`}>
              L1. Understand health of males and females and initial assessment
              protocols{' '}
            </div>
            <div className={`text-[#65758C] ${outfit.className} text-sm`}>
              18/09/2023{' '}
            </div>
          </li>
          <li>
            <div className={`pt-2 ${outfit.className} text-sm`}>
              L2. Conducts initial assessment{' '}
            </div>
            <div className={`text-[#65758C] ${outfit.className} text-sm`}>
              18/09/2023{' '}
            </div>
          </li>
          <li>
            <div className={`pt-2 ${outfit.className} text-sm`}>
              L3. Identifies HRP and Estimates gestational age{' '}
            </div>
            <div className={`text-[#65758C] ${outfit.className} text-sm`}>
              18/09/2023{' '}
            </div>
          </li>
          <li className={`pt-2 ${outfit.className} text-sm`}>
            <div className={`pt-2 ${outfit.className} text-sm`}>
              L3. Identifies HRP and Estimates gestational age{' '}
            </div>
            <div className={`text-[#65758C] ${outfit.className} text-sm`}>
              18/09/2023{' '}
            </div>
          </li>
          <li className={`pt-2 ${outfit.className} text-sm`}>
            <div className={`pt-2 ${outfit.className} text-sm text-[#65758C]`}>
              L5. Administers TD/booster as per lorem ipsum
            </div>
            <div className={`text-[#65758C] ${outfit.className} text-sm`}>
              18/09/2023{' '}
            </div>
          </li>
          <li className={`pt-2 ${outfit.className} text-sm`}>
            <div className={`pt-2 ${outfit.className} text-sm text-[#65758C]`}>
              {' '}
              L6. Understands health of males and females and final assessment
              protocols{' '}
            </div>
            <div className={`text-[#65758C] ${outfit.className} text-sm`}>
              Not done{' '}
            </div>
          </li>
        </ul>
      </div>
    </CustomAccordion>
  );
};

export default CompetencyAccordion;
