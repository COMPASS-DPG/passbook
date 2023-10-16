'use client';
import {
  AssessmentDBSchema,
  CompetencyDBSchema,
  FeedbackDBSchema,
  UserDBSchema,
} from '@prismaClient/userType';
import React, { useEffect, useState } from 'react';

import PassbookPdf from '@/components/Pdf/PassbookPdf';

import { CompetencyPDFType, pdfLevelType } from '@/types/type';

const Pdf = () => {
  const [userString, setUserString] = useState('');
  useEffect(() => {
    // Perform localStorage action
    const data = localStorage.getItem('userData');
    if (data === null) {
      setUserString('');
    } else {
      setUserString(data);
    }
  }, []);
  const ASSESSMENTORDER = {
    PIAA: 4,
    CBP: 3,
    SELF: 2,
    NONE: 1,
  };

  if (userString === '' || userString === null) {
    return (
      <>
        <h1> error in loading the page</h1>
        <h1>Cant find the data</h1>
      </>
    );
  }
  const userData: UserDBSchema = JSON.parse(userString);
  const userCompetencies: CompetencyDBSchema[] = userData.competencies;
  const userAssessments: AssessmentDBSchema[] = userData.assessments;
  const pdfFeedback: FeedbackDBSchema = userData.feedbacks.pop() || {
    dateOfSurveyScore: '--',
    certificateId: '--',
    overallScore: '--',
    competencies: [],
  };

  const pdfData: CompetencyPDFType[] = [];

  // adding assessment data in each level
  userCompetencies.map((userCompetency) => {
    const pdfCompetency: CompetencyPDFType = {
      competency: userCompetency.name,
      levels: [],
    };
    userCompetency.levels.map((levelObj) => {
      const pdfLevel: pdfLevelType = {
        assessmentType: 'NONE',
        date: '--',
        percentage: '--',
        level: levelObj.name,
      };
      userAssessments.map((assessObj) => {
        if (
          ASSESSMENTORDER[assessObj.assessmentType] >
            ASSESSMENTORDER[pdfLevel.assessmentType || 'NONE'] &&
          assessObj.competencyId === userCompetency.id &&
          assessObj.levelNumber === levelObj.levelNumber
        ) {
          pdfLevel['assessmentType'] = assessObj.assessmentType;
          pdfLevel['date'] = assessObj.dateOfIssuance || pdfLevel['date'];
          pdfLevel['percentage'] = assessObj.score || pdfLevel['percentage'];
        }
      });
      pdfCompetency.levels.push(pdfLevel);
    });
    pdfData.push(pdfCompetency);
  });

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ flexGrow: 1 }}>
        <PassbookPdf pdfFeedback={pdfFeedback} pdfData={pdfData} />
      </div>
    </div>
  );
};

export default Pdf;
