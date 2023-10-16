import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Role detail Page',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
