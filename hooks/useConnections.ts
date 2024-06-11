import { useCallback, useEffect, useState } from 'react';
import { useApi } from './useApi';
import { useAccountContext } from './AccountContext';

export const useConnections = () => {
  const { setConnectionsLoading } = useAccountContext();

  const { get } = useApi();
  const [connections, setConnections] = useState([]);

  const getConnections = async () => {
    setConnectionsLoading(true);
    const response = await get({ url: 'connections' });
    if (!response?.data) return [];

    setConnections(response.data.map(({ attributes = {} }) => attributes));
    setConnectionsLoading(false);
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
