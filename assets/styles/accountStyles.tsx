import { colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const accountStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginHorizontal: 15,
  },
  header: {
    fontSize: 24,
    color: colors.textColor,
    marginTop: 20,
    marginBottom: 15,
  },
  accountInfoWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 18,
    backgroundColor: colors.account.info,
    borderRadius: 20,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  email: {
    fontSize: 18,
    color: colors.textColor,
  },
  optionsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  optionsText: {
    fontSize: 18,
    color: colors.textColor,
    marginRight: 10,
  },
  optionsSelectWrapper: {
    flex: 1,
    backgroundColor: colors.account.select,
    position: 'relative',
    borderRadius: 20,
  },
  signOutWrapper: {
    display: 'flex',
    alignSelf: 'flex-end',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    backgroundColor: colors.account.button,
    borderRadius: 20,
    marginTop: 10,
  },
  signOutText: {
    fontSize: 18,
    color: colors.account.signOut,
  },
});
