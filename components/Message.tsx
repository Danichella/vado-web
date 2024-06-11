import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Markdown from 'react-native-markdown-display';

import { markdownStyles, messageStyles } from '@/assets/styles/messageStyles';
import SpeakerIcon from '@/assets/images/speaker-icon.svg';
import { colors } from '@/constants/Colors';
import { LoadingSpinner } from './LoadingSpinner';

interface IMessageProps {
  id: string;
  content: string;
  role: string;
  time: string;
  voiceResponse: (id: string) => Promise<void>;
  voicePlaying: string | null;
}

export const Message = ({
  id,
  content,
  role,
  time,
  voiceResponse,
  voicePlaying,
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
            onPress={() => !voicePlaying && voiceResponse(id)}
          >
            {voicePlaying === id ? (
              <LoadingSpinner size={20} color={colors.loading.audio} />
            ) : (
              <SpeakerIcon
                width="100%"
                height="100%"
                color={colors.messages.speakerIcon}
              />
            )}
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
        <Markdown style={markdownStyles}>{content}</Markdown>
      </View>
    </View>
  );
};
