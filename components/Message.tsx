import React from 'react';
import { View, Text } from 'react-native';

import { messageStyles } from '@/assets/styles/messageStyles';

interface IMessageProps {
  text: string;
  role: string;
  time: string;
}

export const Message = ({ text, role, time }: IMessageProps) => {
  const isUserMessage = role === 'user';

  return (
    <View
      style={[
        messageStyles.container,
        isUserMessage ? messageStyles.alignLeft : messageStyles.alignRight,
      ]}
    >
      <Text style={messageStyles.date}>{time}</Text>
      <View
        style={[
          messageStyles.textContainer,
          isUserMessage ? messageStyles.user : messageStyles.assistant,
        ]}
      >
        <Text style={messageStyles.text}>{text}</Text>
      </View>
    </View>
  );
};
