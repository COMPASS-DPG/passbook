import {
  AssessmentDBSchema,
  CompetencyDBSchema,
  FeedbackDBSchema,
  UserDBSchema,
} from '@prismaClient/userType';
import { useEffect, useState } from 'react';

// import { pdfMock } from '@/mockData/pdfMock';
import { CompetencyPDFType, pdfLevelType } from '@/types/type';

// localStorage.setItem('myData', JSON.stringify(pdfMock));

const usePDFData = () => {
  const [userString, setUserString] = useState<UserDBSchema | undefined>();
  const ASSESSMENTORDER = {
    PIAA: 4,
    CBP: 3,
    SELF: 2,
    NONE: 1,
  };
  const userName: string | undefined = userString?.name;
  const userId: string | undefined = userString?.userId;
  const userData: UserDBSchema | undefined = userString;
  const userCompetencies: CompetencyDBSchema[] | undefined =
    userData?.competencies;
  const userAssessments: AssessmentDBSchema[] | undefined =
    userData?.assessments;
  const pdfFeedback: FeedbackDBSchema | undefined =
    userData?.feedbacks?.length || -1 > 0
      ? userData?.feedbacks[userData?.feedbacks.length - 1]
      : {
          dateOfSurveyScore: '--',
          certificateId: '--',
          overallScore: '--',
          competencies: [],
        };

  const pdfData: CompetencyPDFType[] = [];

  // adding assessment data in each level
  userCompetencies?.map((userCompetency) => {
    const pdfCompetency: CompetencyPDFType = {
      competency: userCompetency?.name,
      levels: [],
    };
    userCompetency?.levels?.map((levelObj) => {
      const pdfLevel: pdfLevelType = {
        assessmentType: 'NONE',
        date: '--',
        percentage: '--',
        level: levelObj?.name,
        certificateId: '',
      };
      userAssessments?.map((assessObj) => {
        if (
          ASSESSMENTORDER[assessObj?.assessmentType] >
            ASSESSMENTORDER[pdfLevel?.assessmentType || 'NONE'] &&
          assessObj?.competencyId === userCompetency?.id &&
          assessObj?.levelNumber === levelObj?.levelNumber
        ) {
          pdfLevel.assessmentType = assessObj?.assessmentType;
          pdfLevel.date = assessObj?.dateOfIssuance;
          // pdfLevel.percentage = assessObj?.score || '--'; will come from wpcase score
          pdfLevel.certificateId = assessObj?.certificateId || '';
        }
      });
      // adding score for the competency and level wise
      pdfFeedback?.competencies.map((feedbackCompetency) => {
        if (feedbackCompetency.name === userCompetency.name) {
          feedbackCompetency.levels.map((feedbackLevel) => {
            if (feedbackLevel.levelNumber === levelObj.levelNumber) {
              pdfLevel.percentage = feedbackLevel.score;
            }
          });
        }
      });
      pdfCompetency?.levels?.push(pdfLevel);
    });
    pdfData?.push(pdfCompetency);
  });

  useEffect(() => {
    // Perform localStorage action
    const data = JSON.parse(localStorage.getItem('userData') || '');

    // const data = JSON.parse(localStorage.getItem('myData') || '');

    if (data || data !== null || data !== undefined) {
      setUserString(data);
    }
  }, []);

  return {
    pdfFeedback,
    pdfData,
    userString,
    userName,
    userId,
  };
};

export default usePDFData;
