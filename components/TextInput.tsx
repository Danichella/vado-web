import React, { Dispatch, SetStateAction } from 'react';
import { View, TextInput as Input, Pressable } from 'react-native';

import { colors } from '@/constants/Colors';
import { messageStyles } from '@/assets/styles/messageStyles';
import SendIcon from '@/assets/images/send-icon.svg';

interface ITextInputProps {
  messageInput: string;
  setMessageInput: Dispatch<SetStateAction<string>>;
  createMessage: () => Promise<void>;
}

export const TextInput = ({
  messageInput,
  setMessageInput,
  createMessage,
}: ITextInputProps) => {
  return (
    <View style={messageStyles.textInputContainer}>
      <Input
        style={messageStyles.input}
        placeholder="Нове повідомлення"
        onChangeText={(newText) => setMessageInput(newText)}
        value={messageInput}
      />
      <Pressable onPress={() => createMessage()} style={messageStyles.send}>
        <SendIcon width="100%" height="100%" color={colors.input.icon} />
      </Pressable>
    </View>
  );
};
