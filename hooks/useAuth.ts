import * as SecureStore from 'expo-secure-store';

export const useAuth = () => {
  const isAuthToken = async () => {
    const authToken = await getAuthToken();

    return !!authToken;
  };

  const getAuthToken = async () => await SecureStore.getItemAsync('auth_token');
  const setAuthToken = async (token: string) =>
    await SecureStore.setItemAsync('auth_token', token);
  const deleteAuthToken = async () =>
    await SecureStore.deleteItemAsync('auth_token');

  return {
    isAuthToken,
    getAuthToken,
    setAuthToken,
    deleteAuthToken,
  };
};
