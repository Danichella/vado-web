import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const messageStyles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
  },
  alignRight: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  alignLeft: {
    flexDirection: 'row-reverse',
    alignSelf: 'flex-start',
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '70%',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  user: {
    backgroundColor: colors.messages.user,
  },
  assistant: {
    backgroundColor: colors.messages.assistant,
  },
  text: {
    color: colors.textColor,
    fontSize: 16,
  },
  date: {
    color: colors.messages.dateColor,
    marginRight: 8,
    marginLeft: 8,
    fontSize: 12,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.input.container,
    paddingVertical: 8,
    paddingLeft: 12,
    paddingRight: 6,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.input.border,
    borderRadius: 20,
    backgroundColor: colors.input.background,
    color: colors.input.text,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  send: {
    width: 35,
    height: 35,
    marginLeft: 12,
  },
  microphone: {
    width: 45,
    height: 35,
    marginLeft: 10,
    paddingLeft: 10,
    borderLeftWidth: 1,
    borderColor: colors.input.icon,
  },
});
