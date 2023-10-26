import { Metadata } from 'next';
import * as React from 'react';

import Navbar from '@/components/competency/Navbar';
import SubNavbar from '@/components/competency/SubNavbar';
import PullRefresh from '@/components/PullRefresh/PullRefresh';

export const metadata: Metadata = {
  title: 'Competency',
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <PullRefresh>
      <>
        <Navbar />
        <SubNavbar />
        {children}
      </>
    </PullRefresh>
  );
}
