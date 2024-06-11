import React from 'react';
import { View } from 'react-native';

import { LoadingSpinner } from './LoadingSpinner';
import { colors } from '@/constants/Colors';
import { loadingStyles } from '@/assets/styles/loadingStyles';

export const PageLoader = () => (
  <View style={loadingStyles.page}>
    <LoadingSpinner size={60} color={colors.loading.page} />
  </View>
);
