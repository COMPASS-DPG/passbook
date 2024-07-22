'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { BsShare } from 'react-icons/bs';
import { LuDownload } from 'react-icons/lu';

import NavBarLink from '@/components/competency/NavBarLink';
import DownloadFailError from '@/components/errorScreen/DownloadFailError';
import ErrorModal from '@/components/errorScreen/ErrorModal';
import { outfit } from '@/components/FontFamily';
import PassbookPdfDownload from '@/components/Pdf/PassbookPdfDownload';
import usePDFData from '@/components/Pdf/usePdfData';
import { passbookActivityEvent } from '@mock/events';

const SubNavbar = () => {
  // to show pdf download error
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const { pdfFeedback, pdfData, userName, userId, certificates } = usePDFData();

  const handleDownload = async () => {
    try {
      if (userId) {
        await passbookActivityEvent({
          userId: userId,
          activity: "DOWNLOAD"
        });
      }
      const blob = await pdf(
        <PassbookPdfDownload
          pdfFeedback={pdfFeedback}
          pdfData={pdfData}
          userId={userId}
          userName={userName}
          certificates={certificates}
        />
      ).toBlob();
      saveAs(blob, 'competency');
    } catch (error) {
      if (error) {
        // to show pdf download error modal
        setIsOpen(true);
      }
    }
  };

  const handleShare = async () => {
    if (userId) {
      await passbookActivityEvent({
        userId: userId,
        activity: "SHARE"
      });
    }
    router.push('/pdf');
  }

  return (
    <div className={`sticky top-0 z-10 bg-white  ${outfit.className}`}>
      {/* modal to show pdf download error */}
      <ErrorModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DownloadFailError onClose={() => setIsOpen(false)} />
      </ErrorModal>

      <div className='flex items-center justify-between p-[20px] text-white'>
        <div className='text-xl font-semibold text-[#272728]'>
          Competency Passbook
        </div>
        <div className='flex gap-4'>
          <button
            className='flex h-10 w-10 items-center justify-center 
            rounded-md  bg-[#385B8B]'
            onClick={handleShare}
          >
            <BsShare size={24} />
          </button>
          <button
            className='flex h-10 w-10 items-center justify-center
              rounded-md   bg-[#385B8B]'
            onClick={handleDownload}
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
