import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';

import { useTimer } from './useTimer';

export const useVoiceMessage = () => {
  const { seconds, timer, startTimer, stopTimer } = useTimer();

  const [isVoiceMessage, setIsVoiceMessage] = useState<boolean>(false);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [audioPermission, setAudioPermission] = useState<boolean>(false);
  const [recording, setRecording] = useState<Audio.Recording | null>(null);

  const startRecording = async () => {
    try {
      if (audioPermission) {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });
      }

      const newRecording = new Audio.Recording();
      await newRecording.prepareToRecordAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      await newRecording.startAsync();
      setRecording(newRecording);
      setIsVoiceMessage(true);
      startTimer();
      setIsRecording(true);
    } catch (error) {
      console.error(error);
    }
  };

  const stopRecording = async () => {
    try {
      if (isRecording && recording) {
        await recording.stopAndUnloadAsync();

        // const playbackObject = new Audio.Sound();
        // await playbackObject.loadAsync({
        //   uri: recordingUri,
        // });
        // await playbackObject.playAsync();

        stopTimer();
        setIsRecording(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteRecorderMessage = () => {
    setIsVoiceMessage(false);
    setRecording(null);
  };

  const getRecordURI = () => {
    return recording?.getURI();
  };

  useEffect(() => {
    async function getPermission() {
      await Audio.requestPermissionsAsync()
        .then((permission) => {
          setAudioPermission(permission.granted);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    getPermission();
    return () => {
      if (isRecording) {
        stopRecording();
        deleteRecorderMessage();
      }
    };
  }, []);

  return {
    timer,
    isRecordingStopped: isVoiceMessage && !isRecording,
    isVoiceMessage,
    startRecording,
    stopRecording,
    deleteRecorderMessage,
    getRecordURI,
  };
};
