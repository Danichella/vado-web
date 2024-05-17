import { StyleSheet } from 'react-native';
import { colors } from '@/constants/Colors';

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fieldsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: colors.textColor,
    marginBottom: 24,
  },
  input: {
    width: 275,
    fontSize: 18,
    backgroundColor: colors.input.background,
    borderColor: colors.input.border,
    color: colors.input.text,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 16,
  },
  button: {
    width: 'auto',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: colors.button.background,
    borderRadius: 20,
  },
  buttonText: {
    color: colors.button.text,
    fontSize: 22,
  },
  hintWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hintText: {
    fontSize: 16,
    color: colors.textColor,
  },
  hintLink: {
    fontSize: 16,
    color: colors.linkColor,
    marginLeft: 4,
  },
  error: {
    fontSize: 16,
    color: colors.errorColor,
  },
});
