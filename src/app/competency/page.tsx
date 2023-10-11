import React from 'react';

import CompetencyAccordion from '@/components/competency/competencies/CompetencyAccordion';

const page = () => {
  // const userData = localStorage.getItem("userData");
  // if (userData !== null) {
  //   const userInfo: UserDB = JSON.parse(userData);
  //   const compList = userInfo.competencies;
  //   compList.map(compObj => {
  //
  //     for(let i=0; i<compObj.levels.length; i++) {
  //
  //     }
  //
  //   })
  // }
  return (
    <div className='m-3 h-max'>
      <div className='mb-3 flex justify-around text-center'>
        <div className='flex'>
          <svg
            className='my-1'
            xmlns='http://www.w3.org/2000/svg'
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
          >
            <circle cx='6' cy='6' r='6' fill='#7CE780' />
          </svg>
          <h6 className='mx-1'>PIAA</h6>
        </div>
        <div className='flex'>
          <svg
            className='my-1'
            xmlns='http://www.w3.org/2000/svg'
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
          >
            <circle cx='6.6665' cy='6' r='6' fill='#F8DA72' />
          </svg>
          <h6 className='mx-1'>CBP</h6>
        </div>
        <div className='flex'>
          <svg
            className='my-1'
            xmlns='http://www.w3.org/2000/svg'
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
          >
            <circle cx='6.3335' cy='6' r='6' fill='#FF9F46' />
          </svg>
          <h6 className='mx-1'>Self</h6>
        </div>
        <div className='flex'>
          <svg
            className='my-1'
            xmlns='http://www.w3.org/2000/svg'
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
          >
            <circle cx='6' cy='6' r='6' fill='#D8D8D8' />
            <circle
              cx='6'
              cy='6'
              r='5.5'
              stroke='#65758C'
              strokeOpacity='0.2'
            />
          </svg>
          <h6 className='mx-1'>Not done</h6>
        </div>
      </div>
      <CompetencyAccordion />
      <CompetencyAccordion />
      <CompetencyAccordion />
      <CompetencyAccordion />
      <CompetencyAccordion />
    </div>
  );
};

export default page;
