import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';

import { chatStyles } from '../assets/styles/chatStyles';
import { Message } from '../components/Message';
import { MessageInput } from '../components/MessageInput';

const Chat = () => {
  return (
    <SafeAreaView style={chatStyles.container}>
      <FlatList
        style={chatStyles.messagesContainer}
        inverted
        data={[
          { text: 'Привіт, як справи?', role: 'user', time: '21:15' },
          { text: 'Привіт, все добре', role: 'assistant', time: '21:15' },
          { text: 'Яка погода сьогодні', role: 'user', time: '21:15' },
          { text: '17 градусів, ясно', role: 'assistant', time: '21:16' },
          {
            text: 'jfdjngjndj gnjdfngjnfdjl gnjldfnjlgn dlfnglk dkdfkdkfkk dsdsdfdfd fdfibdfibibi dknffd fdfnd  fdfkdfkdfdk fddf fff',
            role: 'user',
            time: '21:17',
          },
        ].reverse()}
        renderItem={({ item }) => (
          <Message text={item.text} role={item.role} time={item.time} />
        )}
      />

      <MessageInput />
    </SafeAreaView>
  );
};

export default Chat;
