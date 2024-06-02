import { useCallback, useEffect, useState } from 'react';
import { useApi } from './useApi';

export const useConnections = () => {
  const { get } = useApi();
  const [connections, setConnections] = useState([]);

  const getConnections = async () => {
    const response = await get({ url: 'connections' });
    if (!response?.data) return [];

    setConnections(response.data.map(({ attributes = {} }) => attributes));
  };

  const isConnected = useCallback(
    (provider: string) =>
      connections?.find((connection) => connection.provider == provider)
        ?.connected,
    [connections]
  );

  useEffect(() => {
    getConnections();
  }, []);

  return {
    isConnected,
  };
};
