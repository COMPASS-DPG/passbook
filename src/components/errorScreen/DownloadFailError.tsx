import React from 'react';

import { outfit } from '@/components/FontFamily';

import DownloadFailIcon from '~/svg/downloadFailIcon.svg';

interface PropsType {
  onClose: () => void;
}

const DownloadFailError = ({ onClose }: PropsType) => {
  // pass this component in ErrorModal as children

  return (
    <div className='mt-[80px] text-center'>
      <p className={`text-2xl font-semibold ${outfit.className} `}>
        Download Failed!
      </p>
      <div className='item-center my-3 flex justify-center'>
        <DownloadFailIcon className='w-[150px] ' />
      </div>
      <div
        className={`text-base font-normal 
      ${outfit.className} text-[#272728]`}
      >
        Something went wrong with this process.
      </div>
      <button
        className={`bg-[#EEF5FF] text-base font-semibold text-[#385B8B] ${outfit.className} my-7 rounded-sm p-4`}
        onClick={onClose}
      >
        Retry
      </button>
    </div>
  );
};

export default DownloadFailError;
