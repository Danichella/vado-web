import React, { useEffect } from 'react';
import { SafeAreaView, FlatList } from 'react-native';

import { chatStyles } from '../../assets/styles/chatStyles';
import { Message } from '../../components/Message';
import { MessageInput } from '../../components/MessageInput';
import { useMessages } from '@/hooks/useMessages';
import { useLocation } from '@/hooks/useLocation';
import { PageLoader } from '@/components/PageLoader';
import { MessageLoader } from '@/components/MessageLoader';
import { EmptyState } from '@/components/EmptyState';

const Index = () => {
  const {
    messages,
    messageInput,
    setMessageInput,
    createMessage,
    fetchMessages,
    createVoiceMessage,
    voiceResponse,
    isLoading,
    isSending,
    isBuildingResponse,
    voicePlaying,
  } = useMessages();

  const data = isBuildingResponse ? [{ loader: true }, ...messages] : messages;

  useLocation();

  useEffect(() => {
    const startMessagesFetching = async () => await fetchMessages();

    startMessagesFetching();
  }, []);

  if (isLoading) return <PageLoader />;

  return (
    <SafeAreaView style={chatStyles.container}>
      {messages.length === 0 ? (
        <EmptyState message="У вас поки немає повідомлень" />
      ) : (
        <FlatList
          style={chatStyles.messagesContainer}
          inverted
          data={Array.from(data)}
          renderItem={({ item }) =>
            item.loader ? (
              <MessageLoader />
            ) : (
              <Message
                id={item.id}
                content={item.content}
                role={item.role}
                time={item.time}
                voiceResponse={voiceResponse}
                voicePlaying={voicePlaying}
              />
            )
          }
        />
      )}

      <MessageInput
        messageInput={messageInput}
        setMessageInput={setMessageInput}
        createMessage={createMessage}
        createVoiceMessage={createVoiceMessage}
        isSending={isSending}
      />
    </SafeAreaView>
  );
};

export default Index;
