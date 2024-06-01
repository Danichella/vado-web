import * as SecureStore from 'expo-secure-store';
import { useState } from 'react';

export const useAuth = () => {
  const [expiredAuthToken, setExpiredAuthToken] = useState(false);

  const isAuthToken = async () => {
    const authToken = await getAuthToken();

    return !!authToken;
  };

  const getAuthToken = async () => await SecureStore.getItemAsync('auth_token');
  const setAuthToken = async (token: string) =>
    await SecureStore.setItemAsync('auth_token', token);
  const deleteAuthToken = async () => {
    await SecureStore.deleteItemAsync('auth_token');
    setExpiredAuthToken(false);
  };

  return {
    isAuthToken,
    expiredAuthToken,
    getAuthToken,
    setAuthToken,
    deleteAuthToken,
  };
};
