'use client';
import React from 'react';
import { Detector } from 'react-detect-offline';

import NoInternetConnectionError from '@/components/errorScreen/NoInternetConnectionError';

import { ChildrenType } from '@/types/type';

const ConnectionCheckWrapper = ({ children }: ChildrenType) => {
  return (
    <div>
      <Detector
        render={({ online }) => (
          <> {online ? <>{children}</> : <NoInternetConnectionError />}</>
        )}
      />
    </div>
  );
};

export default ConnectionCheckWrapper;
