import React from 'react';

import CrossIcon from '~/svg/crossIcon.svg';

type PropsType = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const ErrorModal = ({ isOpen, onClose, children }: PropsType) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none'>
      <div className='modal-backdrop fixed inset-0 bg-black opacity-50'></div>
      <div className='relative mx-auto my-6 w-[80%] max-w-3xl'>
        <div className='modal-content rounded bg-white p-4 shadow-lg'>
          <button
            className='modal-close absolute right-0 top-0 m-3'
            onClick={onClose}
          >
            <CrossIcon className='w-6' />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
