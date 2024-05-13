import React, { useState } from 'react';
import { View, TextInput, Image } from 'react-native';

import { colors } from '@/constants/colors';
import { messageStyles } from '@/assets/styles/messageStyles';
import SendIcon from '@/assets/images/send-icon.svg';
import MicIcon from '@/assets/images/mic-icon.svg';

export const MessageInput = () => {
  const [text, setText] = useState('');

  return (
    <View style={messageStyles.inputContainer}>
      <TextInput
        style={messageStyles.input}
        placeholder="Нове повідомлення"
        onChangeText={(newText) => setText(newText)}
        value={text}
      />
      <View style={messageStyles.send}>
        <SendIcon width="100%" height="100%" color={colors.input.icon} />
      </View>
      <View style={messageStyles.microphone}>
        <MicIcon width="100%" height="100%" color={colors.input.icon} />
      </View>
    </View>
  );
};
