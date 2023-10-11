'use client';
import { usePathname } from 'next/navigation';
import * as React from 'react';

import Navbar from '@/components/competency/Navbar';
import SubNavbar from '@/components/competency/SubNavbar';

// export const metadata: Metadata = {
//   title: 'Role',
// };

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      {pathname.includes('/role/') ? (
        <>{children}</>
      ) : (
        <>
          <Navbar />
          <SubNavbar />
          {children}
        </>
      )}
    </>
  );
}
