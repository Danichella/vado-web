import React, { useEffect } from 'react';
import { SafeAreaView, FlatList } from 'react-native';

import { chatStyles } from '../../assets/styles/chatStyles';
import { Message } from '../../components/Message';
import { MessageInput } from '../../components/MessageInput';
import { useMessages } from '@/hooks/useMessages';
import { useLocation } from '@/hooks/useLocation';

const Index = () => {
  const {
    messages,
    messageInput,
    setMessageInput,
    createMessage,
    fetchMessages,
    createVoiceMessage,
    voiceResponse,
  } = useMessages();

  useLocation();

  useEffect(() => {
    const startMessagesFetching = async () => await fetchMessages();

    startMessagesFetching();
  }, []);

  return (
    <SafeAreaView style={chatStyles.container}>
      <FlatList
        style={chatStyles.messagesContainer}
        inverted
        data={Array.from(messages)}
        renderItem={({ item }) => (
          <Message
            id={item.id}
            content={item.content}
            role={item.role}
            time={item.time}
            voiceResponse={voiceResponse}
          />
        )}
      />

      <MessageInput
        messageInput={messageInput}
        setMessageInput={setMessageInput}
        createMessage={createMessage}
        createVoiceMessage={createVoiceMessage}
      />
    </SafeAreaView>
  );
};

export default Index;
