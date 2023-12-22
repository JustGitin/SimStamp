import { useState } from "react";
import "./actions.css";
import { StopButton } from "./stopButton.tsx";
import { StartButton } from "./startButton.tsx";
import { ResetButton } from "./resetButton.tsx";

export const Actions = () => {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <>
      <div className="button-container">
        <StopButton onStop={() => setIsRunning(false)} />
        <StartButton onStart={() => setIsRunning(true)} />
        <ResetButton onReset={() => setIsRunning(false)} />
      </div>
      {/* <p>State:{String(isRunning)}</p> */}
    </>
  );
};
