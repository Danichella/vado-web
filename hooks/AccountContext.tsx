import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react';

interface IAccountContext {
  isLoading: boolean;
  setEmailLoading: Dispatch<SetStateAction<boolean>>;
  setConnectionsLoading: Dispatch<SetStateAction<boolean>>;
  setSettingsLoading: Dispatch<SetStateAction<boolean>>;
}

const AccountsContext = createContext<IAccountContext | undefined>(undefined);

const AccountProvider = ({ children }: { children: ReactNode }) => {
  const [isEmailLoading, setEmailLoading] = useState<boolean>(true);
  const [isConnectionsLoading, setConnectionsLoading] =
    useState<boolean>(false);
  const [isSettingsLoading, setSettingsLoading] = useState<boolean>(false);

  return (
    <AccountsContext.Provider
      value={{
        isLoading: isEmailLoading || isConnectionsLoading || isSettingsLoading,
        setEmailLoading,
        setConnectionsLoading,
        setSettingsLoading,
      }}
    >
      {children}
    </AccountsContext.Provider>
  );
};

const useAccountContext = () => {
  const context = useContext(AccountsContext);
  if (context === undefined) {
    throw new Error('useAccountContext must be used within an AccountProvider');
  }
  return context;
};

export { AccountProvider, useAccountContext };
