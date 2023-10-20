'use client';
import React from 'react';

import SurveyCard from '@/components/competency/wpcas-survey/SurveyCard';
import { outfit } from '@/components/FontFamily';

import { surveys } from '@/mockData/surveyMock';

const page = () => {
  return (
    <div className={`mx-[22px] ${outfit.className}`}>
      <div className='my-[28px] text-xl font-semibold'>WPCAS-Survey</div>
      <div>
        {surveys?.map((survey) => {
          return <SurveyCard key={survey.name} data={survey} />;
        })}
      </div>
    </div>
  );
};

export default page;
