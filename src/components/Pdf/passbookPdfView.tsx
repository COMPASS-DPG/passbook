'use client';
import { PDFViewer } from '@react-pdf/renderer';
import React from 'react';

import PassbookPdfDownload from '@/components/Pdf/PassbookPdfDownload';
import { styles } from '@/components/Pdf/passBookStyle';
import usePDFData from '@/components/Pdf/usePdfData';

const PassbookPdfView = () => {
  const { pdfFeedback, pdfData, userString, userId, userName, certificates } =
    usePDFData();

  if (!userString || userString === undefined || userString === null) {
    return (
      <>
        <h1> error in loading the page</h1>
        <h1>Cant find the data</h1>
      </>
    );
  }

  return (
    <div>
      <PDFViewer style={styles.pdfViewer}>
        <PassbookPdfDownload
          pdfFeedback={pdfFeedback}
          pdfData={pdfData}
          userId={userId}
          userName={userName}
          certificates={certificates}
        />
      </PDFViewer>
    </div>
  );
};

export default PassbookPdfView;
