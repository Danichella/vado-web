import React from 'react';
import { SafeAreaView, Text, Pressable } from 'react-native';

import { accountStyles } from '@/assets/styles/accountStyles';
import { useLogout } from '@/hooks/useLogout';
import { TimezonePicker } from '@/components/TimezonePicker';
import { AccountInfo } from '@/components/AccountInfo';
import { GoogleCalendarConnection } from '@/components/GoogleCalendarConnection';
import { useAccount } from '@/hooks/useAccount';
import { useConnections } from '@/hooks/useConnections';

const Account = () => {
  const { logout } = useLogout();
  const { email } = useAccount();
  const { isConnected } = useConnections();

  return (
    <SafeAreaView style={accountStyles.container}>
      <Text style={accountStyles.header}>Ви увійшли як</Text>
      <AccountInfo email={email} />
      <Text style={accountStyles.header}>Підключення</Text>
      <GoogleCalendarConnection
        email={email}
        isConnected={isConnected('google_calendar')}
      />
      <Text style={accountStyles.header}>Налаштування</Text>
      <TimezonePicker />
      <Pressable onPress={() => logout()} style={accountStyles.signOutWrapper}>
        <Text style={accountStyles.signOutText}>Вийти з акаунта</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Account;
