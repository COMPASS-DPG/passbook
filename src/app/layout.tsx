import { Metadata } from 'next';
import * as React from 'react';
import { ToastContainer } from 'react-toastify';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';
import 'react-toastify/dist/ReactToastify.css';

import ConnectionCheckWrapper from '@/components/errorScreen/ConnectionCheckWrapper';

// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change them
export const metadata: Metadata = {
  title: 'Compass Passbook demo',

  description:
    ' COMPASS is envisioned as a component of a goal-oriented human resource management system (GO-HRM) that will allow departments to link their goals with well-defined targets for teams and individuals, map competencies required to fulfill these targets, and link capacity to performance management. Refer to Appendix A for more details on the motivation for COMPASS.The competency passbook is meant to be a repository of the competencies of a user. It is a list of all the self and PIAA assessments that the user has taken till a particular day. It would contain Course Completion Score (CCS), Proctored Independent and Authorized Assessment (PIAA) scores and certificates, Workplace Competency Assessment Scores (WPCAS) and an employee oriented analytical dashboard. It would be accessed by employees through a mobile app developed for showcasing the modules developed under COMPASS.',
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: '/favicon/samagra_logo.jpg',
    shortcut: '/favicon/samagra_logo.jpg',
    apple: '/favicon/samagra_logo.jpg',
  },
  // icons: {
  //   icon: '/favicon/favicon.ico',
  //   shortcut: '/favicon/favicon-16x16.png',
  //   apple: '/favicon/apple-touch-icon.png',
  // },
  // manifest: `/favicon/site.webmanifest`,
  // openGraph: {
  //   url: siteConfig.url,
  //   title: siteConfig.title,
  //   description: siteConfig.description,
  //   siteName: siteConfig.title,
  //   images: [`${siteConfig.url}/images/og.jpg`],
  //   type: 'website',
  //   locale: 'en_US',
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: siteConfig.title,
  //   description: siteConfig.description,
  //   images: [`${siteConfig.url}/images/og.jpg`],
  //   // creator: '@th_clarence',
  // },
  // authors: [
  //   {
  //     name: 'Theodorus Clarence',
  //     url: 'https://theodorusclarence.com',
  //   },
  // ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <ConnectionCheckWrapper>{children}</ConnectionCheckWrapper>
        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='colored'
        />
      </body>
    </html>
  );
}
