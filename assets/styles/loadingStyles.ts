import { StyleSheet } from 'react-native';

export const loadingStyles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
    borderWidth: 4,
    opacity: 0.25,
  },
  progress: {
    width: '100%',
    height: '100%',
    borderLeftColor: '#00000001',
    borderRightColor: '#00000001',
    borderBottomColor: '#00000001',
    borderWidth: 4,
    position: 'absolute',
  },
});
