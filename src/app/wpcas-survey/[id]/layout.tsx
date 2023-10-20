import { Metadata } from 'next';
import * as React from 'react';

import BackButtonNav from '@/components/competency/BackButtonNav';
import PullRefresh from '@/components/PullRefresh/PullRefresh';

export const metadata: Metadata = {
  title: 'WPCAS-Survey',
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <PullRefresh>
      <>
        <BackButtonNav heading='Feedback Survey' />
        {children}
      </>
    </PullRefresh>
  );
}
