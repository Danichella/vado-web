import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Pressable } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import { accountStyles } from '@/assets/styles/accountStyles';
import AccountIcon from '@/assets/images/account-rounded-icon.svg';
import { colors } from '@/constants/Colors';
import { useLogout } from '@/hooks/useLogout';
import { useAccount } from '@/hooks/useAccount';
import { useSettings } from '@/hooks/useSettings';

const Account = () => {
  const { logout } = useLogout();
  const { email } = useAccount();

  const { timezone, setTimezone, timezoneOptions } = useSettings();

  return (
    <SafeAreaView style={accountStyles.container}>
      <Text style={accountStyles.header}>Ви увійшли як</Text>
      <View style={accountStyles.accountInfoWrapper}>
        <View style={accountStyles.icon}>
          <AccountIcon width="100%" height="100%" color={colors.account.icon} />
        </View>
        <Text style={accountStyles.email}>{email}</Text>
      </View>
      <Text style={accountStyles.header}>Налаштування</Text>
      <View style={accountStyles.optionsWrapper}>
        <Text style={accountStyles.optionsText}>Часовий пояс</Text>
        <View style={accountStyles.optionsSelectWrapper}>
          <RNPickerSelect
            style={{
              placeholder: { color: colors.textColor },
              inputAndroid: { color: colors.textColor },
              inputIOS: { color: colors.textColor },
            }}
            placeholder={{
              label: 'Виберіть місто',
              value: null,
            }}
            onValueChange={(value) => setTimezone(value)}
            items={timezoneOptions || []}
            value={timezone}
          />
        </View>
      </View>
      <Pressable onPress={() => logout()} style={accountStyles.signOutWrapper}>
        <Text style={accountStyles.signOutText}>Вийти з акаунта</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Account;
