import React from 'react';
import { View, Text } from 'react-native';

import { accountStyles } from '@/assets/styles/accountStyles';
import { colors } from '@/constants/Colors';
import AccountIcon from '@/assets/images/account-rounded-icon.svg';

interface IAccountInfoProps {
  email: string;
}

export const AccountInfo = ({ email }: IAccountInfoProps) => {
  return (
    <View style={accountStyles.accountInfoWrapper}>
      <View style={accountStyles.icon}>
        <AccountIcon width="100%" height="100%" color={colors.account.icon} />
      </View>
      <Text style={accountStyles.email}>{email}</Text>
    </View>
  );
};
