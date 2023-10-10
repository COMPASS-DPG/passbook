'use client';
import { useEffect, useState } from 'react';

const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const updateNetworkStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);

    return () => {
      window.removeEventListener('online', updateNetworkStatus);
      window.removeEventListener('offline', updateNetworkStatus);
    };
  }, [isOnline]);

  return isOnline;
};

export { useNetworkStatus };
