import React from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { GoHome } from 'react-icons/go';
import { HiOutlineUserCircle } from 'react-icons/hi';

const Footer = () => {
  return (
    <div className='fixed bottom-0 left-0 right-0 border-t-2 border-solid border-gray-100'>
      <div className='mx-[22px] my-[10px] flex justify-between '>
        <div className='mx-[21px] text-center text-[#65758C]'>
          <div className='flex justify-center'>
            <GoHome size={24} />
          </div>
          <div className='text-center text-sm font-normal'>Home</div>
        </div>
        <div className='mx-[21px] text-center text-[#65758C]'>
          <div className='flex justify-center'>
            <AiFillSetting size={24} />
          </div>
          <div className='text-center text-sm font-normal'>Competency</div>
        </div>
        <div className='mx-[21px] text-center  text-[#65758C]'>
          <div className='flex justify-center '>
            <HiOutlineUserCircle size={24} />
          </div>
          <div className='text-center text-sm font-normal'>Account</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
