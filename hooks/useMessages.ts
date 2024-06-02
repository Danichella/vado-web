import { useState } from 'react';
import { useApi } from './useApi';
import { Audio } from 'expo-av';

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

    buildResponse(message.id);
  };

  const createVoiceMessage = async (voiceRecord: string) => {
    const formData = new FormData();
    formData.append('voice_record', {
      uri: voiceRecord,
      type: 'multipart/form-data',
      name: voiceRecord.split('/').pop(),
    });

    const response = await post({
      url: 'messages',
      body: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    });

    if (!response?.data) return;

    const message: IMessageResponse = response.data;
    addNewMessage(message);

    buildResponse(message.id, { voice: true });
  };

  const buildResponse = async (id: string, { voice = false } = {}) => {
    const response = await get({
      url: `messages/${id}/build_response`,
    });

    if (!response?.data) return;

    if (voice) {
      await voiceResponse(response.data[0].id);
    }

    addMessages(response.data, true);
  };

  const voiceResponse = async (id: string) => {
    const response = await get({
      url: `messages/${id}/voice_response`,
    });

    if (!response.url) return;

    try {
      const audio = new Audio.Sound();
      await audio.loadAsync({ uri: response.url });
      playAudio(audio);
    } catch (error) {
      console.error(error);
    }
  };

  const playAudio = async (audio: Audio.Sound) => {
    await audio.playAsync();
  };

  return {
    messages,
    messageInput,
    setMessageInput,
    createMessage,
    fetchMessages,
    createVoiceMessage,
    voiceResponse,
  };
};
