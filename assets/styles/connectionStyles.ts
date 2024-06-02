import { colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const connectionsStyles = StyleSheet.create({
  buttonWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    paddingVertical: 14,
  },
  active: {
    backgroundColor: colors.connection.active,
    color: colors.connection.activeText,
  },
  inactive: {
    backgroundColor: colors.connection.inactive,
    color: colors.connection.inactiveText,
  },
  buttonElementsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 26,
    marginRight: 8,
  },
  icon: {
    width: 60,
    height: 60,
  },
});
