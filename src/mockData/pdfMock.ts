// export const pdfMonk = {
//   date: 'Sep 7,2023',
//   aggregate: '70%',
//   competencies: [
//     {
//       competency: 'Pregnancy Identification',
//       levels: [
//         {
//           level:
//             'Understands health of males and females and initial assessment protocols',
//           assessmentType: 'PIAA',
//           date: '18/12/2023',
//           percentage: '68%',
//         },
//         {
//           level: 'Identifies pregnancy using Nischaya Kit',
//           assessmentType: 'CBP',
//           date: '18/12/2023',
//           percentage: '68%',
//         },
//         {
//           level: 'Conducts initial assessment',
//           assessmentType: 'PIAA',
//           date: '18/12/2023',
//           percentage: '68%',
//         },
//         {
//           level: 'Identifies HRP and Estimates gestational age',
//           assessmentType: 'SELF',
//           date: '18/12/2023',
//           percentage: '68%',
//         },
//         {
//           level: 'Administers TD/booster as per lorem ipsum',
//           assessmentType: 'NONE',
//           date: '18/12/2023',
//           percentage: '68%',
//         },
//       ],
//     },
//     {
//       competency: ' Birth Planning and Preparedness for PW and HRP',
//       levels: [
//         {
//           level:
//             'Understands health of males and females and initial assessment protocols',
//           assessmentType: 'PIAA',
//           date: '18/12/2023',
//           percentage: '68%',
//         },
//         {
//           level: 'Identifies pregnancy using Nischaya Kit',
//           assessmentType: 'CBP',
//           date: '18/12/2023',
//           percentage: '68%',
//         },
//         {
//           level: 'Conducts initial assessment',
//           assessmentType: 'PIAA',
//           date: '18/12/2023',
//           percentage: '68%',
//         },
//         {
//           level: 'Identifies HRP and Estimates gestational age',
//           assessmentType: 'SELF',
//           date: '18/12/2023',
//           percentage: '68%',
//         },
//         {
//           level: 'Administers TD/booster as per lorem ipsum',
//           assessmentType: 'NONE',
//           date: '18/12/2023',
//           percentage: '68%',
//         },
//       ],
//     },
//     {
//       competency: 'Pregnancy Identification',
//       levels: [
//         {
//           level:
//             'Understands health of males and females and initial assessment protocols',
//           assessmentType: 'PIAA',
//           date: '18/12/2023',
//           percentage: '68%',
//         },
//         {
//           level: 'Identifies pregnancy using Nischaya Kit',
//           assessmentType: 'CBP',
//           date: '18/12/2023',
//           percentage: '68%',
//         },
//         {
//           level: 'Conducts initial assessment',
//           assessmentType: 'PIAA',
//           date: '18/12/2023',
//           percentage: '68%',
//         },
//         {
//           level: 'Identifies HRP and Estimates gestational age',
//           assessmentType: 'SELF',
//           date: '18/12/2023',
//           percentage: '68%',
//         },
//         {
//           level: 'Administers TD/booster as per lorem ipsum',
//           assessmentType: 'NONE',
//           date: '18/12/2023',
//           percentage: '68%',
//         },
//       ],
//     },
//     {
//       competency: ' Birth Planning and Preparedness for PW and HRP',
//       levels: [
//         {
//           level:
//             'Understands health of males and females and initial assessment protocols',
//           assessmentType: 'PIAA',
//           date: '18/12/2023',
//           percentage: '68%',
//         },
//         {
//           level: 'Identifies pregnancy using Nischaya Kit',
//           assessmentType: 'CBP',
//           date: '18/12/2023',
//           percentage: '68%',
//         },
//         {
//           level: 'Conducts initial assessment',
//           assessmentType: 'PIAA',
//           date: '18/12/2023',
//           percentage: '68%',
//         },
//         {
//           level: 'Identifies HRP and Estimates gestational age',
//           assessmentType: 'SELF',
//           date: '18/12/2023',
//           percentage: '68%',
//         },
//         {
//           level: 'Administers TD/booster as per lorem ipsum',
//           assessmentType: 'NONE',
//           date: '18/12/2023',
//           percentage: '68%',
//         },
//       ],
//     },
//     {
//       competency: 'Pregnancy Identification',
//       levels: [
//         {
//           level:
//             'Understands health of males and females and initial assessment protocols',
//           assessmentType: 'PIAA',
//           date: '18/12/2023',
//           percentage: '68%',
//         },
//         {
//           level: 'Identifies pregnancy using Nischaya Kit',
//           assessmentType: 'CBP',
//           date: '18/12/2023',
//           percentage: '68%',
//         },
//         {
//           level: 'Conducts initial assessment',
//           assessmentType: 'PIAA',
//           date: '18/12/2023',
//           percentage: '68%',
//         },
//         {
//           level: 'Identifies HRP and Estimates gestational age',
//           assessmentType: 'SELF',
//           date: '18/12/2023',
//           percentage: '68%',
//         },
//         {
//           level: 'Administers TD/booster as per lorem ipsum',
//           assessmentType: 'NONE',
//           date: '18/12/2023',
//           percentage: '68%',
//         },
//         {
//           level: 'Administers TD/booster as per lorem ipsum',
//           assessmentType: 'NONE',
//           date: '18/12/2023',
//           percentage: '68%',
//         },
//         {
//           level: 'Administers TD/booster as per lorem ipsum',
//           assessmentType: 'NONE',
//           date: '18/12/2023',
//           percentage: '68%',
//         },
//       ],
//     },
//   ],
// };

export const pdfMock = {
  roles: [
    {
      id: 1,
      name: 'Frontend Developer',
      description: 'Develops user interfaces using web technologies',
      competencyIds: [1, 2, 3],
      totalAssessment: 9,
      completedAssessment: 2,
    },
  ],
  competencies: [
    {
      id: 1,
      name: 'HTML',
      levels: [
        { id: 1, number: 1, name: 'Basic' },
        { id: 2, number: 2, name: 'Intermediate' },
        { id: 3, number: 3, name: 'Advanced' },
      ],
    },
    {
      id: 2,
      name: 'CSS',
      levels: [
        { id: 4, number: 1, name: 'Basic' },
        { id: 5, number: 2, name: 'Intermediate' },
        { id: 6, number: 3, name: 'Advanced' },
      ],
    },
    {
      id: 3,
      name: 'JavaScript',
      levels: [
        { id: 7, number: 1, name: 'Basic' },
        { id: 8, number: 2, name: 'Intermediate' },
        { id: 9, number: 3, name: 'Advanced' },
      ],
    },
  ],
  assessments: [
    {
      competencyId: 1,
      competency: 'NestJs',
      level: 3,
      type: 'SELF',
      score: '80',
      certificateId: 'cert-211',
      dateOfIssuance: '2021-12-1',
    },
    {
      competencyId: 1,
      competency: 'HTML',
      level: 3,
      type: 'SELF',
      score: '80',
      certificateId: 'cert-211',
      dateOfIssuance: '2021-12-1',
    },
  ],
  feedbacks: [
    {
      dateOfSurveyScore: '2023-10-10',
      certificateId: 'cert-001',
      overallScore: 90,
      competencies: [
        {
          id: 1,
          name: 'HTML',
          levels: [
            { levelNumber: 1, name: 'Basic', score: '90%' },
            { levelNumber: 2, name: 'Intermediate', score: '80%' },
          ],
        },
        {
          id: 1,
          name: 'CSS',
          levels: [
            { levelNumber: 1, name: 'Basic', score: '90%' },
            { levelNumber: 2, name: 'Intermediate', score: '80%' },
          ],
        },
        {
          id: 1,
          name: 'Javascript',
          levels: [
            { levelNumber: 1, name: 'Basic', score: '90%' },
            { levelNumber: 2, name: 'Intermediate', score: '80%' },
          ],
        },
      ],
    },
  ],
  id: '65286e17e64f0cbb2b9dbbf4',
  userId: '1245',
  name: 'Aman',
  team: 'Engineering',
  phone: '+91-8441000890',
  designation: 'Software Engineer',
  create: '2023-10-12T22:07:19.249Z',
  updated: '2023-10-12T22:35:05.737Z',
};
