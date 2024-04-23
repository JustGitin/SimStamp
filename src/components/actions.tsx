import "./actions.css";
import { StopButton } from "./StopButton.tsx";
import { StartButton } from "./StartButton.tsx";
import { ResetButton } from "./ResetButton.tsx";
import { DateTime } from "luxon";
import { TimeEntry } from "./DummyEntries.ts";
import { useState } from "react";
import { confirm } from "devextreme/ui/dialog";

export interface ActionProps {
  onNewTimeEntry: (newTimeEntry: TimeEntry) => void;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  start: DateTime | null;
}

export const Actions = (props: ActionProps) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const notes = "Hallo, ich bin eine Notiz";
  const projectName = "SimStamp";

  const createNewEntry = (
    startStamp: DateTime,
    stopStamp: DateTime,
    projectName: string,
    notes: string
  ) => {
    const newTimeEntry: TimeEntry = {
      ID: 0,
      StartTime: startStamp.toISO()!,
      EndTime: stopStamp.toISO()!,
      Project: projectName,
      notes: notes,
    };

    props.onNewTimeEntry(newTimeEntry);
    console.log("entry was made");
  };

  return (
    <div className="button-container">
      <StartButton
        onStart={() => {
          if (!props.start) {
            setIsButtonDisabled(false);
            props.onStart();
          }
        }}
      />
      <StopButton
        onStop={() => {
          props.onStop();
          if (props.start) {
            setIsButtonDisabled(true);
            const stopStamp = DateTime.now();

            createNewEntry(props.start, stopStamp, projectName, notes);
          } else {
            console.log("No running timer detected");
          }
        }}
      />
      <ResetButton
        isButtonVisible={isButtonDisabled}
        onReset={async () => {
          const result = await confirm(
            "<i>Bist du dir sicher? <br> Deine aufgezeichnete geht verloren</i>",
            "Confirm changes"
          );
          if (props.start && result == true) {
            setIsButtonDisabled(true);
            props.onReset();
          }
        }}
      />
    </div>
  );
};
