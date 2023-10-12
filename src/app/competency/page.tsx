'use client';
import {
  AssessmentDBSchema,
  CompetencyDBSchema,
  UserDBSchema,
} from '@prismaClient/userType';
import React from 'react';

import CompetencyAccordion from '@/components/competency/competencies/CompetencyAccordion';

const AssessmentTypes = [
  { name: 'PIAA', colour: '#7CE780' },
  { name: 'CBP', colour: '#FEF08A' },
  { name: 'SELF', colour: '#FB923C' },
  { name: 'NONE', colour: '#E5E7EB' },
];

const page = () => {
  const userData = localStorage.getItem('userData');
  let compList: CompetencyDBSchema[] = [];
  let assessmentList: AssessmentDBSchema[] = [];
  if (userData !== null) {
    const userInfo: UserDBSchema = JSON.parse(userData);
    compList = userInfo.competencies;
    assessmentList = userInfo.assessments;
  }
  return (
    <div className='m-3 h-max'>
      <div className='mb-3 flex justify-around text-center'>
        {AssessmentTypes.map((assessmentType) => {
          return (
            <div key={assessmentType.name} className='flex'>
              <svg
                className='my-1'
                xmlns='http://www.w3.org/2000/svg'
                width='12'
                height='12'
                viewBox='0 0 12 12'
                fill='none'
              >
                <circle cx='6' cy='6' r='6' fill={assessmentType.colour} />
              </svg>
              <h6 className='mx-1'>{assessmentType.name}</h6>
            </div>
          );
        })}
      </div>
      {compList.map((compObj: CompetencyDBSchema) => {
        return (
          <CompetencyAccordion
            key={compObj.id}
            competency={compObj}
            assessments={assessmentList}
          />
        );
      })}
    </div>
  );
};

export default page;
