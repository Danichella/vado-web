import React from 'react';
import { Pressable, View, Text } from 'react-native';
import * as Linking from 'expo-linking';

import { BASE_URL } from '@/constants/BaseUrl';
import GoogleCalendarIcon from '@/assets/images/google-calendar-icon.svg';
import { connectionsStyles } from '@/assets/styles/connectionStyles';

interface IGoogleCalendarConnectionProps {
  email: string;
  isConnected: boolean;
}

export const GoogleCalendarConnection = ({
  email,
  isConnected,
}: IGoogleCalendarConnectionProps) => {
  const handleAuth = () => {
    email &&
      !isConnected &&
      Linking.openURL(
        `${BASE_URL}/oauth/google_calendar/redirect?user_email=${email}`
      );
  };

  return (
    <Pressable
      style={[
        connectionsStyles.buttonWrapper,
        isConnected ? connectionsStyles.inactive : connectionsStyles.active,
      ]}
      onPress={() => handleAuth()}
    >
      <View style={connectionsStyles.buttonElementsWrapper}>
        <Text
          style={[
            connectionsStyles.text,
            isConnected ? connectionsStyles.inactive : connectionsStyles.active,
          ]}
        >
          {isConnected ? 'Підключенно' : 'Підключити'}
        </Text>
        <View style={connectionsStyles.icon}>
          <GoogleCalendarIcon width="100%" height="100%" />
        </View>
      </View>
    </Pressable>
  );
};
