import { useState } from "react";

const [isRunning, setIsRunning] = useState(false);

const startButton = () => {
  setIsRunning(true);
  return <button className="startButton"></button>;
};

const stopButton = () => {
  setIsRunning(false);
  return <button className="stopButton"></button>;
};

const resetTimer = () => {
  //Logik des Buttons
  return <button className="resetButton"></button>;
};
