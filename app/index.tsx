import React, { useEffect } from 'react';
import { router } from 'expo-router';

import { useAuth } from '@/hooks/useAuth';
import { Redirect } from 'expo-router';

export default function Index() {
  const { isAuthToken, expiredAuthToken } = useAuth();

  useEffect(() => {
    const verifyAuthToken = async () =>
      (!(await isAuthToken()) || expiredAuthToken) &&
      router.replace('/auth/login');

    verifyAuthToken();
  }, [isAuthToken, expiredAuthToken]);

  return <Redirect href={'/tabs'} />;
}
