import React, { useEffect } from 'react';
import { router } from 'expo-router';

import Chat from './chat';
import { useAuth } from '@/hooks/useAuth';

require('../helpers/axiosInit');

export default function Index() {
  const { isAuthToken } = useAuth();

  useEffect(() => {
    const verifyAuthToken = async () =>
      !(await isAuthToken()) && router.replace('/auth/login');

    verifyAuthToken();
  }, [isAuthToken]);

  return <Chat />;
}
