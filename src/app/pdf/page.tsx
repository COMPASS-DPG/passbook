import React from 'react';

import PassbookPdfView from '@/components/Pdf/passbookPdfView';

const Pdf = () => {

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ flexGrow: 1 }}>
        <PassbookPdfView />
      </div>
    </div>
  );
};

export default Pdf;
