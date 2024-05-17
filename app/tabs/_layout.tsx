import React, { useState } from 'react';
import { Slot, router } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

import { navigationStyles } from '@/assets/styles/navigationStyles';
import { baseStyles } from '@/assets/styles/baseStyles';
import { colors } from '@/constants/Colors';

import ChatIcon from '@/assets/images/chat-icon.svg';
import NotificationIcon from '@/assets/images/notifications-icon.svg';
import PearsonIcon from '@/assets/images/person-icon.svg';

const NavigationLayout = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const isActiveTab = (index: number) => index === activeIndex;
  const onTabPress = (path: string, index: number) => {
    setActiveIndex(index);
    router.replace(path);
  };

  return (
    <View style={baseStyles.container}>
      <Slot />
      <View style={navigationStyles.container}>
        <Pressable
          onPress={() => onTabPress('/tabs', 0)}
          style={navigationStyles.tabWrapper}
        >
          <View style={navigationStyles.icon}>
            <ChatIcon
              width="100%"
              height="100%"
              color={
                isActiveTab(0)
                  ? colors.navigation.active
                  : colors.navigation.inactive
              }
            />
          </View>
          <Text
            style={[
              navigationStyles.text,
              isActiveTab(0)
                ? navigationStyles.activeText
                : navigationStyles.inactiveText,
            ]}
          >
            Повідомлення
          </Text>
        </Pressable>
        <Pressable
          onPress={() => onTabPress('/tabs/notification', 1)}
          style={navigationStyles.tabWrapper}
        >
          <View style={navigationStyles.icon}>
            <NotificationIcon
              width="100%"
              height="100%"
              color={
                isActiveTab(1)
                  ? colors.navigation.active
                  : colors.navigation.inactive
              }
            />
          </View>
          <Text
            style={[
              navigationStyles.text,
              isActiveTab(1)
                ? navigationStyles.activeText
                : navigationStyles.inactiveText,
            ]}
          >
            Сповіщення
          </Text>
        </Pressable>
        <Pressable
          onPress={() => onTabPress('/tabs/account', 2)}
          style={navigationStyles.tabWrapper}
        >
          <View style={navigationStyles.icon}>
            <PearsonIcon
              width="100%"
              height="100%"
              color={
                isActiveTab(2)
                  ? colors.navigation.active
                  : colors.navigation.inactive
              }
            />
          </View>
          <Text
            style={[
              navigationStyles.text,
              isActiveTab(2)
                ? navigationStyles.activeText
                : navigationStyles.inactiveText,
            ]}
          >
            Акаунт
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default NavigationLayout;
