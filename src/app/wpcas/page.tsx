'use client';
import {
  CompetencyDBSchema,
  feedbackCompetencies,
  FeedbackDBSchema,
  UserDBSchema,
} from '@prismaClient/userType';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import WpcasAccordion from '@/components/competency/wpcas/WpcasAccordion';
import NoCompetencyAssignError from '@/components/errorScreen/NoCompetencyAssignError';
import { outfit } from '@/components/FontFamily';

import survey from '~/svg/Survey.png';

const Wpcas = () => {
  const [userData, setUserData] = useState('');

  useEffect(() => {
    const data = localStorage.getItem('userData') || '';
    if (data !== '') {
      setUserData(data);
    }
  }, [userData]);

  let feedbackList: FeedbackDBSchema[] = [];
  let userCompetency: CompetencyDBSchema[] = [];
  let feedback: FeedbackDBSchema = {
    overallScore: '--',
    dateOfSurveyScore: '',
    competencies: [],
    certificateId: '',
  };
  // let assessmentList: AssessmentDBSchema[] = [];
  if (userData !== '') {
    const userInfo: UserDBSchema = JSON.parse(userData);
    userCompetency = userInfo.competencies;
    feedbackList = userInfo.feedbacks;
    if (feedbackList.length > 0) {
      feedback = feedbackList[feedbackList.length - 1];
    }
    // compList = userInfo.competencies;
    // assessmentList = userInfo.assessments;
  }
  const filterFeedbackCompetency = (
    competency: CompetencyDBSchema
  ): feedbackCompetencies | null => {
    const feedbackCompetency = feedback.competencies.filter((compObj) => {
      return competency.name === compObj.name;
    });
    if (feedbackCompetency.length > 0) return feedbackCompetency[0];
    return null;
  };
  return (
    <div className='m-3 h-max'>
      <div className='flex h-28 space-x-4 p-2'>
        <div className='left w-3/5 rounded-lg border-orange-300 bg-amber-100 p-2'>
          <div>
            <h5 className={`font-medium ${outfit.className}`}>Overall WPCAS</h5>
          </div>
          <div className='flex space-x-4'>
            <h4 className={`text-2xl text-blue-950 ${outfit.className}`}>
              {feedback.overallScore}
            </h4>
            <div className='rounded bg-sky-200 p-1'>
              <h5 className='text-sm text-blue-800'>Aggregate %</h5>
            </div>
          </div>
          <div className='text-sm font-thin'>
            <p className={`text-gray-500 ${outfit.className}`}>
              {`Last updated on: ${feedback.dateOfSurveyScore}`}
            </p>
          </div>
        </div>
        <div className='right relative w-2/5 cursor-pointer rounded-lg border-blue-900 bg-blue-200'>
          <div className='absolute -right-1 -top-2 h-5 w-5 rounded-full bg-red-600 text-center font-semibold text-white'>
            {/*2*/}
          </div>
          <Image
            src={survey}
            alt='My Image'
            className='mx-12'
            width={50}
            height={50}
          />
          <h6
            className={`w-15 mx-12 text-sm font-semibold text-blue-950 ${outfit.className}`}
          >
            Survey Others
          </h6>
        </div>
      </div>
      {userCompetency && userCompetency?.length !== 0 ? (
        userCompetency?.map((competency, i) => {
          return (
            <WpcasAccordion
              key={i}
              userCompetency={competency}
              feedbackCompetency={filterFeedbackCompetency(competency)}
            />
          );
        })
      ) : (
        <NoCompetencyAssignError />
      )}
    </div>
  );
};

export default Wpcas;
