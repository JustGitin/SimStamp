import { useState } from "react";
import "./actions.css";
import { StopButton } from "./stopButton.tsx";
import { StartButton } from "./startButton.tsx";
import { ResetButton } from "./resetButton.tsx";
import { DateTime } from "luxon";
import { timeEntries } from "./data.ts";
import { DataGrid } from "devextreme-react";

export const Actions = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [startStamp, setStartStamp] = useState<DateTime | null>(null);

  return (
    <>
      <div className="button-container">
        <StopButton
          onStop={() => {
            setIsRunning(false);
            const newEntryID = timeEntries[timeEntries.length - 1].ID + 1; //jetzt neuer Eintrag mit der newEntryID
          }}
        />
        <StartButton
          onStart={() => {
            setIsRunning(true);
            setStartStamp(DateTime.now()); //brauche eigentlich nur die Zeit und nicht alles
          }}
        />
        <ResetButton
          onReset={() => {
            setIsRunning(false);
            setStartStamp(null);
          }}
        />
      </div>
      <div style={{ color: "green", fontWeight: 400 }}>
        isRunning:{String(isRunning)}
      </div>
    </>
  );
};

// bisher soll StopButton nur eine neue Zeile beginnen, das reseten ist in ResetButton umgesetzt
