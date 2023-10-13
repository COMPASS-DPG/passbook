import React from 'react';

import PassbookPdfView from '@/components/Pdf/passbookPdfView';

const Pdf = () => {
  // const [userString, setUserString] = useState<UserDBSchema | undefined>();
  // useEffect(() => {
  //   // Perform localStorage action
  //   // const data = localStorage.getItem('userData');
  //   const data:any=pdfMock

  //   if (data !== null || data!==undefined) {
  //     setUserString(data);
  //   }
  // }, []);
  // const ASSESSMENTORDER = {
  //   PIAA: 4,
  //   CBP: 3,
  //   SELF: 2,
  //   NONE: 1,
  // };

  // if (userString===undefined  || userString === null) {
  //   return (
  //     <>
  //       <h1> error in loading the page</h1>
  //       <h1>Cant find the data</h1>
  //     </>
  //   );
  // }
  // const userData: UserDBSchema | undefined = userString;
  // const userCompetencies: CompetencyDBSchema[] | undefined = userData?.competencies;
  // const userAssessments: AssessmentDBSchema[] | undefined = userData?.assessments;
  // const pdfFeedback: FeedbackDBSchema | undefined = userData?.feedbacks?.pop() || {
  //   dateOfSurveyScore: '--',
  //   certificateId: '--',
  //   overallScore: '--',
  //   competencies: [],
  // };

  // const pdfData: CompetencyPDFType[] = [];

  // // adding assessment data in each level
  // userCompetencies.map((userCompetency) => {
  //   const pdfCompetency: CompetencyPDFType = {
  //     competency: userCompetency.name,
  //     levels: [],
  //   };
  //   userCompetency.levels.map((levelObj) => {
  //     const pdfLevel: pdfLevelType = {
  //       assessmentType: 'NONE',
  //       date: '--',
  //       percentage: '--',
  //       level: levelObj.name,
  //     };
  //     userAssessments.map((assessObj) => {
  //       if (
  //         ASSESSMENTORDER[assessObj.type] >
  //         ASSESSMENTORDER[pdfLevel.assessmentType || 'NONE'] &&
  //         assessObj.competencyId === userCompetency.id &&
  //         assessObj.level === levelObj.number
  //       ) {
  //         pdfLevel['assessmentType'] = assessObj.type;
  //         pdfLevel['date'] = assessObj.dateOfIssuance;
  //         pdfLevel['percentage'] = assessObj.score;
  //       }
  //     });
  //     pdfCompetency.levels.push(pdfLevel);
  //   });
  //   pdfData.push(pdfCompetency);
  // });

  //{ //pdfData
  //       competency: 'Pregnancy Identification',
  //       levels: [
  //         {
  //           level: 'Administers TD/booster as per lorem ipsum',
  //           assessmentType: 'Not done',
  //           date: '18/12/2023',
  //           percentage: '68%',
  //         },
  //       ],
  //     }
  // console.log(userCompetencies)
  // console.log(pdfFeedback)
  // console.log(pdfData)
  // if (typeof window !== 'undefined') {
  //     // Use React PDF
  //     const blob = await pdf(<MyDocument />).toBlob();
  // }
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
        <PassbookPdfView />
      </div>
    </div>
  );
};

export default Pdf;
