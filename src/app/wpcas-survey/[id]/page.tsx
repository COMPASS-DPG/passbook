'use client';
import React, { useState } from 'react';

import { SurveyForm } from '@/components/competency/wpcas-survey/SurveyForm';
import SurveyProfile from '@/components/competency/wpcas-survey/SurveyProfile';

import { surveys } from '@/mockData/surveyMock';

const Page = ({ params }: { params: { id: string } }) => {
  const [currentGroup, setCurrentGroup] = useState(1);

  const survey = surveys?.find((item) => item?.id == params?.id);

  const questions = survey?.questions ?? [];
  const name = survey?.name ?? '';
  const role = survey?.role ?? '';

  const handleCurrentGroup = (value: number) => {
    setCurrentGroup(value);
  };

  return (
    <div>
      {currentGroup === 1 && <SurveyProfile name={name} role={role} />}
      <SurveyForm
        questions={questions}
        currentGroup={currentGroup}
        setCurrentGroup={(value) => handleCurrentGroup(value)}
      />
    </div>
  );
};

export default Page;
