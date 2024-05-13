import { useState } from 'react';
import { useApi } from './useApi';

interface IMessageResponse {
  id: string;
  attributes: {
    content: string;
    role: string;
    time: string;
  };
}

interface IMessage {
  id: string;
  content: string;
  role: string;
  time: string;
}

export const useMessages = () => {
  const [messages, setMessages] = useState<Array<IMessage>>([]);
  const [messageInput, setMessageInput] = useState<string>('');

  const { get, post } = useApi();

  const fetchMessages = async () => {
    const response = await get({ url: 'messages' });

    if (!response?.data) return;

    addMessages(response.data);
  };

  const addMessages = (
    newMessages: Array<IMessageResponse>,
    reverse = false
  ) => {
    setMessages((values) => {
      const formatedMessages = newMessages.map(
        ({ id, attributes }: IMessageResponse) => ({
          id,
          ...attributes,
        })
      );
      const ids = values.map(({ id }) => id);
      const filteredMessages = formatedMessages.filter(
        ({ id }) => !ids.includes(id)
      );

      return reverse
        ? filteredMessages.concat(values)
        : values.concat(filteredMessages);
    });
  };

  const addNewMessage = (message: IMessageResponse) => {
    setMessages((values) => {
      const ids = values.map(({ id }) => id);
      if (ids.includes(message.id)) return values;

      return [{ id: message.id, ...message.attributes }].concat(values);
    });
  };

  const createMessage = async () => {
    const response = await post({
      url: 'messages',
      body: { content: messageInput },
    });

    if (!response?.data) {
      setMessageInput('');
      return;
    }

    const message: IMessageResponse = response.data;
    addNewMessage(message);
    setMessageInput('');

    await buildResponse(message.id);
  };

  const buildResponse = async (id: string) => {
    const response = await get({
      url: `messages/${id}/build_response`,
    });

    if (!response?.data) return;

    addMessages(response.data, true);
  };

  return {
    messages,
    messageInput,
    setMessageInput,
    createMessage,
    fetchMessages,
  };
};
