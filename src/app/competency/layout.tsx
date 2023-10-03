import { Metadata } from 'next';
import * as React from 'react';

import Navbar from '@/components/competency/Navbar';
import SubNavbar from '@/components/competency/SubNavbar';

export const metadata: Metadata = {
  title: 'Competency',
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <SubNavbar />
      {children}
    </>
  );
}
