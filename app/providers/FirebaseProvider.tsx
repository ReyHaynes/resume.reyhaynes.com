'use client';

import { useEffect } from 'react';
import { getFirebaseAnalytics } from '../lib/firebase';

interface FirebaseProviderProps {
  children: React.ReactNode;
}

export default function FirebaseProvider({ children }: FirebaseProviderProps) {
  useEffect(() => {
    // Initialize Firebase Analytics on the client side
    getFirebaseAnalytics();
  }, []);

  return <>{children}</>;
}
