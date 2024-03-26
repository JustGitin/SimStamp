import { useState } from "react";
import "./actions.css";
import { StopButton } from "./stopButton.tsx";
import { StartButton } from "./startButton.tsx";
import { ResetButton } from "./resetButton.tsx";
import { Button } from "devextreme-react/button";

export const Actions = () => {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <>
      <div className="button-container">
        <StopButton onStop={() => setIsRunning(false)} />
        <StartButton onStart={() => setIsRunning(true)} />
        <ResetButton onReset={() => setIsRunning(false)} />
      </div>
      <div style={{ color: "green", fontWeight: 400 }}>
        isRunning:{String(isRunning)}
      </div>
    </>
  );
};
