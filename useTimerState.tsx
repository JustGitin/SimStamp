import { useState } from "react";
import { DateTime } from "luxon";

export const useTimerState = () => {
  const [startTime, setStartTime] = useState(DateTime.now); //wird derzeit noch zu früh zugewiesen
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);

  const startTimer = () => {
    setStartTime(DateTime.now()); //Das möchte ich auf luxon umformen
    const interval = setInterval(pushTimeData, 1000);
    setTimerInterval(interval);
  };

  const stopTimer = () => {
    if (timerInterval) {
      clearInterval(timerInterval);
    }
  };

  const pushTimeData = () => {
    if (startTime) {
      const currentTime = DateTime.now();
      const elapsedTimeValue = currentTime.diff(startTime); //Kann man nicht minus rechnen
      console.log(elapsedTimeValue);
      setElapsedTime(elapsedTimeValue);
    }
  };

  return {
    startTime,
    elapsedTime,
    startTimer,
    stopTimer,
    updateTimer: pushTimeData,
  };
};

// Die frage ist wie hoch muss ich die Logik der Buttons anordnen
