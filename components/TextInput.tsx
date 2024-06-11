import React, { Dispatch, SetStateAction } from 'react';
import { View, TextInput as Input, Pressable } from 'react-native';

import { colors } from '@/constants/Colors';
import { messageStyles } from '@/assets/styles/messageStyles';
import SendIcon from '@/assets/images/send-icon.svg';
import { LoadingSpinner } from './LoadingSpinner';

interface ITextInputProps {
  messageInput: string;
  setMessageInput: Dispatch<SetStateAction<string>>;
  createMessage: () => Promise<void>;
  isSending: boolean;
}

export const TextInput = ({
  messageInput,
  setMessageInput,
  createMessage,
  isSending,
}: ITextInputProps) => {
  return (
    <View style={messageStyles.textInputContainer}>
      <Input
        style={messageStyles.input}
        placeholder="Нове повідомлення"
        onChangeText={(newText) => setMessageInput(newText)}
        value={messageInput}
      />
      <Pressable
        onPress={() => !isSending && createMessage()}
        style={messageStyles.send}
      >
        {isSending ? (
          <LoadingSpinner size={35} />
        ) : (
          <SendIcon width="100%" height="100%" color={colors.input.icon} />
        )}
      </Pressable>
    </View>
  );
};
