import React, { Dispatch, SetStateAction } from 'react';
import { View, TouchableOpacity } from 'react-native';

import { colors } from '@/constants/Colors';
import { messageStyles } from '@/assets/styles/messageStyles';
import MicIcon from '@/assets/images/mic-icon.svg';
import TrashIcon from '@/assets/images/trash-icon.svg';
import { TextInput } from './TextInput';
import { useVoiceMessage } from '@/hooks/useVoiceMessage';
import { VoiceInput } from './VoiceInput';

interface IMessageInputProps {
  messageInput: string;
  setMessageInput: Dispatch<SetStateAction<string>>;
  createMessage: () => Promise<void>;
  createVoiceMessage: (voiceRecord: string) => Promise<void>;
}

export const MessageInput = ({
  messageInput,
  setMessageInput,
  createMessage,
  createVoiceMessage,
}: IMessageInputProps) => {
  const {
    timer,
    isVoiceMessage,
    isRecordingStopped,
    startRecording,
    stopRecording,
    deleteRecorderMessage,
    getRecordURI,
  } = useVoiceMessage();

  const sendVoiceMessage = async () => {
    const voiceRecordUri = getRecordURI();
    voiceRecordUri && (await createVoiceMessage(voiceRecordUri));
    deleteRecorderMessage();
  };

  return (
    <View style={messageStyles.inputContainer}>
      {isVoiceMessage ? (
        <VoiceInput
          timer={timer}
          isRecordingStopped={isRecordingStopped}
          sendVoiceMessage={sendVoiceMessage}
        />
      ) : (
        <TextInput
          messageInput={messageInput}
          setMessageInput={setMessageInput}
          createMessage={createMessage}
        />
      )}
      {isRecordingStopped ? (
        <TouchableOpacity
          style={messageStyles.trash}
          onPress={() => deleteRecorderMessage()}
        >
          <TrashIcon width="100%" height="100%" color={colors.input.redIcon} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={messageStyles.microphone}
          onPressIn={async () => await startRecording()}
          onPressOut={async () => await stopRecording()}
        >
          <MicIcon width="100%" height="100%" color={colors.input.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};
