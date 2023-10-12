'use client';
import {
  AssessmentDBSchema,
  CompetencyDBSchema,
  LevelDBSchema,
} from '@prismaClient/userType';
import React from 'react';

import CustomAccordion from '@/components/Accordion/Accordion';
import { outfit } from '@/components/FontFamily';

import { LevelWithAssessmentData } from '@/types/type';

// type Props = {}

const ASSESSMENTORDER = {
  PIAA: 4,
  CBP: 3,
  SELF: 2,
  NONE: 1,
};

interface CompetencyAccordionProps {
  competency: CompetencyDBSchema;
  assessments: AssessmentDBSchema[];
}
const CompetencyAccordion: React.FC<CompetencyAccordionProps> = ({
  competency,
  assessments,
}) => {
  const totalLevels = competency.levels;

  let resultLevels: LevelWithAssessmentData[] = [];
  resultLevels = totalLevels.map((level: LevelDBSchema) => {
    let resultAssessment: {
      assessmentType: 'PIAA' | 'CBP' | 'SELF' | 'NONE';
      certificate: string;
      dateOfIssuance: string;
    } = {
      assessmentType: 'NONE',
      certificate: '',
      dateOfIssuance: '',
    };
    assessments.map((assessment) => {
      if (
        assessment.competency === competency.name &&
        assessment.level === level.number
      ) {
        if (
          ASSESSMENTORDER[assessment.type] >
          ASSESSMENTORDER[resultAssessment.assessmentType]
        ) {
          resultAssessment = {
            assessmentType: assessment.type,
            certificate: assessment.certificateId,
            dateOfIssuance: assessment.dateOfIssuance,
          };
        }
      }
    });
    return {
      name: level.name,
      levelNumber: level.number,
      assesstmentType: resultAssessment.assessmentType,
      dateOfIssuance: resultAssessment.dateOfIssuance,
      certificateId: resultAssessment.certificate,
    };
  });
  return (
    <CustomAccordion title={competency.name} levels={resultLevels}>
      <div>
        <div className='flex items-center gap-2.5 text-[#272728]'>
          <div className={`text-sm ${outfit.className}  font-semibold`}>
            Logs
          </div>
        </div>
        <ul className='text-sm font-normal text-[#272728]'>
          {resultLevels.map((level, i) => {
            if (level.assesstmentType !== 'NONE') {
              return (
                <li key={i}>
                  <div className={`pt-2 ${outfit.className} text-sm`}>
                    {`L${level.levelNumber} ${level.name}`}
                  </div>
                  <div className={`text-[#65758C] ${outfit.className} text-sm`}>
                    {`${level.dateOfIssuance}`}
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </CustomAccordion>
  );
};

export default CompetencyAccordion;
