import { notificationStyles } from '@/assets/styles/notificationStyles';
import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

const Notification = () => {
  return (
    <SafeAreaView style={notificationStyles.container}>
      <View style={notificationStyles.emptyState}>
        <Text style={notificationStyles.emptyStateText}>
          У ВАС ПОКИ НЕМАЄ СПОВІЩЕНЬ
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Notification;
