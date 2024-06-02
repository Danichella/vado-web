import { StyleSheet } from 'react-native';
import { colors } from '@/constants/Colors';

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
  optionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
    marginLeft: 4,
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
    marginLeft: 4,
    fontSize: 12,
  },
  speakerIcon: {
    width: 20,
    height: 20,
  },
  inputContainer: {
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.input.container,
    paddingVertical: 8,
    paddingLeft: 12,
    paddingRight: 6,
  },
  textInputContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  voiceInputContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
  trash: {
    width: 45,
    height: 35,
    marginLeft: 10,
    paddingLeft: 10,
    borderLeftWidth: 1,
    borderColor: colors.input.icon,
  },
  record: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
  timer: {
    flex: 1,
    fontSize: 18,
    color: colors.textColor,
  },
});
