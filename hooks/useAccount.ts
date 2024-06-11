import { useEffect, useState } from 'react';
import { useApi } from './useApi';
import { useAccountContext } from './AccountContext';

export const useAccount = () => {
  const { setEmailLoading } = useAccountContext();

  const [email, setEmail] = useState<string>('');

  const { get } = useApi();

  const getAccountData = async () => {
    setEmailLoading(true);
    const response = await get({ url: 'accounts/current' });
    const userEmail = response?.data?.attributes?.email;

    if (!userEmail) return;

    setEmail(userEmail);
    setEmailLoading(false);
  };

  useEffect(() => {
    getAccountData();
  }, []);

  return {
    email,
  };
};
