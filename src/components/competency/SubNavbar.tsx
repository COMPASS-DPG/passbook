'use client';
import { BsShare } from 'react-icons/bs';
import { LuDownload } from 'react-icons/lu';

import NavBarLink from '@/components/competency/NavBarLink';
import { outfit } from '@/components/FontFamily';

const SubNavbar = () => {
  return (
    <div className={`sticky top-0 z-10 bg-white  ${outfit.className}`}>
      <div className='flex items-center justify-between p-[20px] text-white'>
        <div className='text-xl font-semibold text-[#272728]'>
          Competency Passbook
        </div>
        <div className='flex gap-4'>
          <button
            className='flex h-10 w-10 items-center justify-center 
         rounded-md  bg-[#385B8B]'
          >
            <BsShare size={24} />
          </button>
          <button
            className='flex h-10 w-10 items-center justify-center
         rounded-md   bg-[#385B8B]'
          >
            <LuDownload size={24} />
          </button>
        </div>
      </div>
      <nav className='mx-[10px]  p-[10px] '>
        <ul className='flex flex-row justify-between font-medium '>
          <NavBarLink routeName='Role' currentPath='/role' />
          <NavBarLink routeName='Competencies' currentPath='/competency' />
          <NavBarLink routeName='WPCAS' currentPath='/wpcas' />
        </ul>
      </nav>
    </div>
  );
};

export default SubNavbar;
