import { StyleSheet } from 'react-native';
import { colors } from '@/constants/Colors';

export const baseStyles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: colors.appColor,
    display: 'flex',
    flexDirection: 'column',
  },
  emptyState: {
    flex: 1,
    backgroundColor: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  emptyStateWrapper: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyStateText: {
    fontSize: 16,
    color: colors.emptyState.text,
  },
});
