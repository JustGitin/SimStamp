import React, { useState } from "react";
import { TimerProps } from "./interface";
import { Minutes, Time } from "./typeDeclaration";

const Timer: React.FunctionComponent<TimerProps> = ({
  onClick,
  projectTitle,
  description,
}) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
    onClick({ h: 1, min: 0 });
  };

  const resetTimer = () => {
    setTime(0);
  };

  return (
    <div>
      <div>{time}</div>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
