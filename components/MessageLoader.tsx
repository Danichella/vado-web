import { messageStyles } from '@/assets/styles/messageStyles';
import { colors } from '@/constants/Colors';
import { View } from 'react-native';
import { TypingAnimation } from 'react-native-typing-animation';

export const MessageLoader = () => (
  <View style={[messageStyles.container, messageStyles.alignRight]}>
    <View style={[messageStyles.textContainer, messageStyles.assistant]}>
      <TypingAnimation
        style={{ width: 40, height: 40, top: 7.5 }}
        dotRadius={5}
        dotMargin={10}
        dotColor={colors.textColor}
        dotX={15}
      />
    </View>
  </View>
);
