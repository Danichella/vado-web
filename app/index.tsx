import React, { useEffect } from 'react';
import { router } from 'expo-router';

import { useAuth } from '@/hooks/useAuth';
import { Redirect } from 'expo-router';

export default function Index() {
  const { isAuthToken } = useAuth();

  useEffect(() => {
    const verifyAuthToken = async () =>
      !(await isAuthToken()) && router.replace('/auth/login');

    verifyAuthToken();
  }, [isAuthToken]);

  return <Redirect href={'/tabs'} />;
}
