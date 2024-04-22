import "./actions.css";
import { StopButton } from "./StopButton.tsx";
import { StartButton } from "./StartButton.tsx";
import { ResetButton } from "./ResetButton.tsx";
import { DateTime } from "luxon";
import { TimeEntryProps } from "./dummyEntries.ts";
import { useState } from "react";
import { confirm } from "devextreme/ui/dialog";

export interface ActionProps {
  onNewTimeEntry: (newTimeEntry: TimeEntryProps) => void;
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
    displayElapsedTime: number,
    startStamp: DateTime,
    stopStamp: DateTime,
    projectName: string,
    notes: string
  ) => {
    const currentDate: string = DateTime.now().toISODate();

    const newTimeEntry: TimeEntryProps = {
      ID: 0,
      Datum: currentDate,
      VergangeneZeit: displayElapsedTime,
      StartUhrzeit: startStamp.toISO()!,
      EndUhrzeit: stopStamp.toISO()!,
      Projekt: projectName,
      Notizen: notes,
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
            const difference = stopStamp.diff(props.start).valueOf();
            createNewEntry(
              difference,
              props.start,
              stopStamp,
              projectName,
              notes
            );
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
