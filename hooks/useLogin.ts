import { useState } from 'react';
import { router } from 'expo-router';

import axios from '@/helpers/axiosInit';
import { useAuth } from './useAuth';

interface ILoginParams {
  email?: string;
  password?: string;
}

export const useLogin = () => {
  const { setAuthToken } = useAuth();

  const [loginParams, setLoginParams] = useState<ILoginParams>({});
  const [error, setError] = useState(null);

  const setEmail = (value: string) =>
    setLoginParams((params) => ({ ...params, email: value }));
  const setPassword = (value: string) =>
    setLoginParams((params) => ({ ...params, password: value }));

  const sendLoginRequest = async () => {
    axios
      .post('/login', { user: loginParams })
      .then(async (response) => {
        const body = response?.data;

        if (body.status.code === 200) {
          await setAuthToken(response.headers.authorization);
          router.replace('/tabs');
        } else {
          setError(body.status.message);
        }
      })
      .catch((error) => setError(error.response.data.status.message));
  };

  return {
    loginParams,
    setEmail,
    setPassword,
    sendLoginRequest,
    error,
  };
};
