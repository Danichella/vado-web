import { colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const notificationStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  emptyState: {
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
