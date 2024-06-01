import { useEffect, useState } from 'react';
import { useApi } from './useApi';

export const useAccount = () => {
  const [email, setEmail] = useState<string>('');

  const { get } = useApi();

  const getAccountData = async () => {
    const response = await get({ url: 'accounts/current' });
    const userEmail = response?.data?.attributes?.email;

    if (!userEmail) return;

    setEmail(userEmail);
  };

  useEffect(() => {
    getAccountData();
  }, []);

  return {
    email,
  };
};
