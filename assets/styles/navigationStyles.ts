import { StyleSheet } from 'react-native';
import { colors } from '@/constants/Colors';

export const navigationStyles = StyleSheet.create({
  container: {
    height: 'auto',
    width: '100%',
    backgroundColor: colors.appColor,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  tabWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftTab: {
    alignSelf: 'flex-start',
  },
  centralTab: {
    alignSelf: 'center',
  },
  rightTab: {
    alignSelf: 'flex-end',
  },
  text: {
    fontSize: 12,
  },
  inactiveText: {
    color: colors.navigation.inactive,
  },
  activeText: {
    color: colors.navigation.active,
  },
  icon: {
    width: 30,
    height: 30,
    marginBottom: 6,
  },
});
