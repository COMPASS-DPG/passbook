'use client';

import Head from 'next/head';
import { useRouter, useSearchParams } from 'next/navigation';
import * as React from 'react';
import { useEffect } from 'react';

// import PassbookPdf from '@/components/Pdf/PassbookPdf';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    let userId = localStorage.getItem('userId');
    const queryId = searchParams.get('userId') || '';
    if (queryId.trim() !== '') {
      userId = queryId;
      localStorage.setItem('userId', queryId);
    }

    fetch(process.env.NEXT_PUBLIC_WPCAS_URL + '/api/user-metadata/' + userId, {
      method: 'POST',
      cache: 'force-cache',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch((error) => {
        // Handle any errors that occur during the API call
        // eslint-disable-next-line no-console
        console.error('API call error:', error);
      });

    const currentDate = new Date();
    const isoString = currentDate.toISOString();
    const data = {
      data: {
        event: {
          userId: userId,
          loginDate: isoString,
        },
      },
    };

    fetch(
      process.env.NEXT_PUBLIC_OBSRV_URL + '/data/v1/in/event-passbook-login',
      {
        method: 'POST',
        cache: 'force-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error hitting event-passbook-login:', error);
      });

    // Make the API call using fetch
    fetch('/api/user?userId=' + userId, { cache: 'force-cache' })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((apiData) => {
        // Handle the successful response and update the component's state
        localStorage.setItem('userData', JSON.stringify(apiData));
        router.push('/role');
      })
      .catch((error) => {
        // Handle any errors that occur during the API call
        // eslint-disable-next-line no-console
        console.error('API call error:', error);
        router.push('/error/DataNotFound');
      });
  });

  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-white'>
        <div className='flex h-screen flex-col items-center justify-center'>
          <div className='h-16 w-16 animate-spin rounded-full border-4 border-t-4 border-blue-500'></div>
          <p className='mt-4 text-lg font-semibold text-gray-600'>
            Loading Your Passbook...
          </p>
        </div>
      </section>
    </main>
  );
}
