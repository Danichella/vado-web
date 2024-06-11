import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { colors } from '@/constants/Colors';
import { messageStyles } from '@/assets/styles/messageStyles';
import RecordIcon from '@/assets/images/record-icon.svg';
import SendIcon from '@/assets/images/send-icon.svg';
import { LoadingSpinner } from './LoadingSpinner';

interface IVoiceInputProps {
  timer: string;
  isRecordingStopped: boolean;
  sendVoiceMessage: () => Promise<void>;
  isSending: boolean;
}

export const VoiceInput = ({
  timer,
  isRecordingStopped,
  sendVoiceMessage,
  isSending,
}: IVoiceInputProps) => {
  return (
    <View style={messageStyles.voiceInputContainer}>
      <View style={messageStyles.record}>
        <RecordIcon width="100%" height="100%" color={colors.input.redIcon} />
      </View>
      <Text style={messageStyles.timer}>{timer}</Text>
      {isRecordingStopped && (
        <Pressable
          onPress={() => !isSending && sendVoiceMessage()}
          style={messageStyles.send}
        >
          {isSending ? (
            <LoadingSpinner size={35} />
          ) : (
            <SendIcon width="100%" height="100%" color={colors.input.icon} />
          )}
        </Pressable>
      )}
    </View>
  );
};
