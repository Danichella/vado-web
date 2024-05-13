import { StyleSheet } from 'react-native';

export const chatStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  messagesContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 6,
  },
});
