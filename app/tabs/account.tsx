import React from 'react';
import { SafeAreaView, Text, Pressable } from 'react-native';

import { accountStyles } from '@/assets/styles/accountStyles';
import { useLogout } from '@/hooks/useLogout';
import { TimezonePicker } from '@/components/TimezonePicker';
import { AccountInfo } from '@/components/AccountInfo';

const Account = () => {
  const { logout } = useLogout();

  return (
    <SafeAreaView style={accountStyles.container}>
      <Text style={accountStyles.header}>Ви увійшли як</Text>
      <AccountInfo />
      <Text style={accountStyles.header}>Налаштування</Text>
      <TimezonePicker />
      <Pressable onPress={() => logout()} style={accountStyles.signOutWrapper}>
        <Text style={accountStyles.signOutText}>Вийти з акаунта</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Account;
