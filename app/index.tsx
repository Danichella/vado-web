import React from 'react';

import { SafeAreaView } from 'react-native';

import { baseStyles } from '../assets/styles/baseStyles';
import Chat from './chat';

export default function Index() {
  return (
    <SafeAreaView style={baseStyles.container}>
      <Chat />
    </SafeAreaView>
  );
}
