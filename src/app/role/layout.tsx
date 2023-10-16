'use client';
import * as React from 'react';

import Navbar from '@/components/competency/Navbar';
import SubNavbar from '@/components/competency/SubNavbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <SubNavbar />
      {children}
    </>
  );
}
