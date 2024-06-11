import { SafeAreaView, View, Text } from 'react-native';
import { baseStyles } from '@/assets/styles/baseStyles';

interface IEmptyState {
  message: string;
}

export const EmptyState = ({ message }: IEmptyState) => {
  return (
    <SafeAreaView style={baseStyles.emptyState}>
      <View style={baseStyles.emptyStateWrapper}>
        <Text style={baseStyles.emptyStateText}>{message}</Text>
      </View>
    </SafeAreaView>
  );
};
