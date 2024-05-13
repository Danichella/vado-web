import { useState } from 'react';
import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';

import axios from '@/helpers/axiosInit';
import { useAuth } from './useAuth';

interface ISignUpParams {
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export const useSignUp = () => {
  const { setAuthToken } = useAuth();

  const [signUpParams, setSignUpParams] = useState<ISignUpParams>({});
  const [error, setError] = useState<string | null>(null);

  const setEmail = (value: string) =>
    setSignUpParams((params) => ({ ...params, email: value }));
  const setPassword = (value: string) =>
    setSignUpParams((params) => ({ ...params, password: value }));
  const setConfirmationPassword = (value: string) =>
    setSignUpParams((params) => ({ ...params, confirmPassword: value }));

  const sendSignUpRequest = async () => {
    if (signUpParams.password !== signUpParams.confirmPassword) {
      setError('Паролі не збігаються.');
      return;
    }

    const body = { user: signUpParams };
    delete body.user.confirmPassword;

    axios
      .post('/signup', body)
      .then(async (response) => {
        const body = response?.data;

        if (body.status.code === 200) {
          await setAuthToken(response.headers.authorization);
          router.replace('/');
        } else {
          setError(body.status.message);
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return {
    signUpParams,
    setEmail,
    setPassword,
    setConfirmationPassword,
    sendSignUpRequest,
    error,
  };
};
