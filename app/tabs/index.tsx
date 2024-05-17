import React, { useEffect } from 'react';
import { SafeAreaView, FlatList } from 'react-native';

import { chatStyles } from '../../assets/styles/chatStyles';
import { Message } from '../../components/Message';
import { MessageInput } from '../../components/MessageInput';
import { useMessages } from '@/hooks/useMessages';

const Index = () => {
  const {
    messages,
    messageInput,
    setMessageInput,
    createMessage,
    fetchMessages,
  } = useMessages();

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
          <Message content={item.content} role={item.role} time={item.time} />
        )}
      />

      <MessageInput
        messageInput={messageInput}
        setMessageInput={setMessageInput}
        createMessage={createMessage}
      />
    </SafeAreaView>
  );
};

export default Index;
