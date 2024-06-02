import { useMemo, useState } from 'react';

export const useTimer = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(
    null
  );

  const timer = useMemo(() => {
    const minutes = Math.floor(seconds / 60);
    const secondsChange = seconds % 60;

    return `${minutes >= 10 ? minutes : '0' + minutes}:${
      secondsChange >= 10 ? secondsChange : '0' + secondsChange
    }`;
  }, [seconds]);

  const resetTimer = () => {
    setSeconds(0);
  };

  const startTimer = ({ reset = true } = {}) => {
    reset && resetTimer();

    !timerInterval &&
      setTimerInterval(setInterval(() => setSeconds((prev) => prev + 1), 1000));
  };

  const stopTimer = () => {
    timerInterval && clearInterval(timerInterval);
    setTimerInterval(null);
  };

  return {
    seconds,
    timer,
    startTimer,
    stopTimer,
  };
};
