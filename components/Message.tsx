import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { messageStyles } from '@/assets/styles/messageStyles';
import SpeakerIcon from '@/assets/images/speaker-icon.svg';
import { colors } from '@/constants/Colors';

interface IMessageProps {
  id: string;
  content: string;
  role: string;
  time: string;
  voiceResponse: (id: string) => Promise<void>;
}

export const Message = ({
  id,
  content,
  role,
  time,
  voiceResponse,
}: IMessageProps) => {
  const isUserMessage = role === 'user';

  return (
    <View
      style={[
        messageStyles.container,
        isUserMessage ? messageStyles.alignLeft : messageStyles.alignRight,
      ]}
    >
      <View style={messageStyles.optionsContainer}>
        {!isUserMessage && (
          <Pressable
            style={messageStyles.speakerIcon}
            onPress={() => voiceResponse(id)}
          >
            <SpeakerIcon
              width="100%"
              height="100%"
              color={colors.messages.speakerIcon}
            />
          </Pressable>
        )}
        <Text style={messageStyles.date}>{time}</Text>
      </View>
      <View
        style={[
          messageStyles.textContainer,
          isUserMessage ? messageStyles.user : messageStyles.assistant,
        ]}
      >
        <Text style={messageStyles.text}>{content}</Text>
      </View>
    </View>
  );
};
