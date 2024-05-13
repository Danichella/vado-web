import React, { Dispatch, SetStateAction } from 'react';
import { View, TextInput, Pressable } from 'react-native';

import { colors } from '@/constants/colors';
import { messageStyles } from '@/assets/styles/messageStyles';
import SendIcon from '@/assets/images/send-icon.svg';
import MicIcon from '@/assets/images/mic-icon.svg';

interface IMessageInputProps {
  messageInput: string;
  setMessageInput: Dispatch<SetStateAction<string>>;
  createMessage: () => Promise<void>;
}

export const MessageInput = ({
  messageInput,
  setMessageInput,
  createMessage,
}: IMessageInputProps) => {
  return (
    <View style={messageStyles.inputContainer}>
      <TextInput
        style={messageStyles.input}
        placeholder="Нове повідомлення"
        onChangeText={(newText) => setMessageInput(newText)}
        value={messageInput}
      />
      <Pressable onPress={() => createMessage()} style={messageStyles.send}>
        <SendIcon width="100%" height="100%" color={colors.input.icon} />
      </Pressable>
      <View style={messageStyles.microphone}>
        <MicIcon width="100%" height="100%" color={colors.input.icon} />
      </View>
    </View>
  );
};
