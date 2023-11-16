'use client';
import {
  CompetencyDBSchema,
  feedbackCompetencies,
} from '@prismaClient/userType';
import Image from 'next/image';
import React from 'react';

import CustomAccordion from '@/components/Accordion/Accordion';
import { outfit } from '@/components/FontFamily';

import levelIcon from '../../../../public/images/levelIcon.png';

import { LevelWithFeedbackData } from '@/types/type';

interface WPCASAccordionProps {
  userCompetency: CompetencyDBSchema;
  feedbackCompetency: feedbackCompetencies | null;
}

const WpcasAccordion: React.FC<WPCASAccordionProps> = ({
  userCompetency: userCompetency,
  feedbackCompetency: feedbackCompetency,
}) => {
  const resultLevels: LevelWithFeedbackData[] = [];
  userCompetency?.levels?.map((userLevel) => {
    const wpcasLevel = {
      name: userLevel.name,
      levelNumber: userLevel.levelNumber,
      score: '--',
    };
    feedbackCompetency?.levels.map((feedbackLevel) => {
      if (userLevel.name === feedbackLevel.name) {
        wpcasLevel.score = feedbackLevel.score.toString();
      }
    });

    resultLevels.push(wpcasLevel);
  });

  return (
    <CustomAccordion
      title={userCompetency.name}
      status='Competency'
      levels={[]}
    >
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
              {resultLevels.map((level, i) => {
                return (
                  <tr key={i}>
                    <td className={`py-3 ${outfit.className} text-sm`}>
                      {level.name}
                    </td>
                    <td
                      className={`px-2 text-right font-semibold ${
                        parseInt(level.score) >= 60
                          ? 'text-[#4ACB5F]'
                          : 'text-red-500'
                      } `}
                    >
                      {' '}
                      {level.score}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div></div>
      </div>
    </CustomAccordion>
  );
};

export default WpcasAccordion;
