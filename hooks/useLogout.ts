import { router } from 'expo-router';

import axios from '@/helpers/axiosInit';
import { useAuth } from './useAuth';

export const useLogout = () => {
  const { deleteAuthToken, getAuthToken } = useAuth();

  const logout = async () => {
    axios
      .delete('/logout', { headers: { Authorization: await getAuthToken() } })
      .then(async () => {
        await deleteAuthToken();
        router.replace('/auth/login');
      })
      .catch((error) => console.error(error));
  };

  return {
    logout,
  };
};
