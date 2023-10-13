'use client';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BsShare } from 'react-icons/bs';
import { LuDownload } from 'react-icons/lu';

import NavBarLink from '@/components/competency/NavBarLink';
import { outfit } from '@/components/FontFamily';
import PassbookPdfDownload from '@/components/Pdf/PassbookPdfDownload';
import usePDFData from '@/components/Pdf/usePdfData';

const SubNavbar = () => {
  const router = useRouter();
  const { pdfFeedback, pdfData, userName, userId } = usePDFData();

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
            onClick={() => router.push('/pdf')}
          >
            <BsShare size={24} />
          </button>
          <PDFDownloadLink
            document={
              <PassbookPdfDownload
                pdfFeedback={pdfFeedback}
                pdfData={pdfData}
                userId={userId}
                userName={userName}
              />
            }
            fileName='form'
          >
            {({ loading }) =>
              !loading && (
                <button
                  className='flex h-10 w-10 items-center justify-center
              rounded-md   bg-[#385B8B]'
                >
                  <LuDownload size={24} />
                </button>
              )
            }
          </PDFDownloadLink>
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
