import { StyleSheet } from 'react-native';
import { colors } from '@/constants/Colors';

export const baseStyles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: colors.appColor,
    display: 'flex',
    flexDirection: 'column',
  },
});
