import Image from 'next/image';
import React from 'react';

import CustomAccordion from '@/components/Accordion/Accordion';
import { outfit } from '@/components/FontFamily';

import levelIcon from '../../../../public/images/levelIcon.png';

const WpcasAccordion = () => {
  return (
    <CustomAccordion title='Pregnancy Identification' status='Competency'>
      <div>
        <div className='flex items-center gap-2.5 py-5  text-[#272728]'>
          <table className='w-full table-fixed'>
            <colgroup>
              <col className='w-4/5' />
              <col className='w-1/5' />
            </colgroup>
            <thead>
              <tr>
                <th>
                  <div className='mb-1.5'>
                    <div className='flex gap-2.5'>
                      <Image
                        priority
                        width={18}
                        height={18}
                        src={levelIcon}
                        alt='level icon'
                      />
                      <div
                        className={`text-sm ${outfit.className} font-semibold`}
                      >
                        Levels
                      </div>
                    </div>
                  </div>
                </th>
                <th>
                  <div
                    className={`text-sm ${outfit.className} text-right font-semibold`}
                  >
                    WPCAS%
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={`py-3 ${outfit.className} text-sm`}>
                  Understands health of males and females and initial assessment
                  protocols{' '}
                </td>
                <td className='px-2 text-right font-semibold'>68%</td>
              </tr>
              <tr>
                <td className={`py-3 ${outfit.className} text-sm`}>
                  Conducts initial assessment
                </td>
                <td className='px-2 text-right font-semibold'>70%</td>
              </tr>
              <tr>
                <td className={`py-3 ${outfit.className} text-sm`}>
                  Identifies HRP and Estimates gestational age
                </td>
                <td className='px-2 text-right font-semibold'>50%</td>
              </tr>
              <tr>
                <td
                  className={`py-3 ${outfit.className} text-sm text-[#65758C]`}
                >
                  Identifies pregnancy using Nischaya Kit
                </td>
              </tr>
              <tr>
                <td
                  className={`py-3 ${outfit.className} text-sm text-[#65758C]`}
                >
                  Administers TD/booster as per lorem ipsum
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div></div>
      </div>
    </CustomAccordion>
  );
};

export default WpcasAccordion;
