'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

import { SurveyType } from '@/types/type';

import ProfileImage from '~/images/profile.png';
import BellIcon from '~/svg/bellIcon.svg';
import FeedbackPendingIcon from '~/svg/feedbackPendingIcon.svg';
import FeedbackSuccessIcon from '~/svg/feedbackSuccessIcon.svg';

type PropType = {
  data: SurveyType;
};

const SurveyCard = ({ data }: PropType) => {
  const router = useRouter();

  return (
    <div className='border-[rgba(101, 117, 140, 0.20)] my-3 max-w-[700px] rounded-md border border-solid p-[14px]'>
      <div className='flex items-start justify-between'>
        <div className='mb-6 flex gap-2'>
          <div>
            <Image
              src={ProfileImage}
              alt='profile image'
              width={44}
              height={44}
            ></Image>
          </div>
          <div>
            <p className='text-base font-medium text-[#272728]'>{data?.name}</p>
            <p className='text-sm font-normal text-[#65758C]'>{data?.role}</p>
          </div>
        </div>
        {!data?.getFeedback && <BellIcon className='w-[22px]' />}
      </div>

      <div className='flex'>
        {data?.providedFeedback ? (
          <div className='flex  w-[50%] items-center '>
            <div>
              <FeedbackSuccessIcon className='mr-[10px] w-[18px]' />
            </div>
            <div className='text-sm font-medium text-[#4ACB5F]'>
              Provided feedback
            </div>
          </div>
        ) : (
          <button
            className='h-9 w-[50%] rounded bg-[#385B8B] px-2 py-2 text-sm font-semibold text-[#FFF]'
            onClick={() => router.push(`wpcas-survey/${data?.id}`)}
          >
            Give Feedback
          </button>
        )}

        {data?.getFeedback ? (
          <div className='flex w-[50%] items-center '>
            <div>
              <FeedbackSuccessIcon className='mx-[10px]  w-[18px]' />
            </div>
            <div className='text-sm font-medium text-[#4ACB5F]'>
              Provided feedback to you
            </div>
          </div>
        ) : (
          <div className='flex  w-[50%] items-center '>
            <div>
              <FeedbackPendingIcon className='mx-[10px] w-[18px]' />
            </div>
            <div className='text-sm text-[#787878]'>
              Hasn't given feedback to you
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SurveyCard;
