import "./actions.css";
import { StopButton } from "./StopButton.tsx";
import { StartButton } from "./StartButton.tsx";
import { ResetButton } from "./ResetButton.tsx";
import { DateTime } from "luxon";
import { TimeEntryProps } from "./dummyEntries.ts";

export interface ActionProps {
  onNewTimeEntry: (newTimeEntry: TimeEntryProps) => void;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  start: DateTime | null;
}

export const Actions = (props: ActionProps) => {
  const notes = "Hallo, ich bin eine Notiz";
  const projectName = "SimStamp";

  const createNewEntry = (
    displayElapsedTime: number,
    startStamp: DateTime,
    stopStamp: DateTime,
    projectName: string,
    notes: string
  ) => {
    const currentDate: string = DateTime.now().toISODate(); //currentDate=time of entry

    const newTimeEntry: TimeEntryProps = {
      ID: 0,
      Datum: currentDate,
      VergangeneZeit: displayElapsedTime,
      StartUhrzeit: startStamp.toISO()!,
      EndUhrzeit: stopStamp.toISO()!,
      Projekt: projectName,
      Notizen: notes,
    };

    props.onNewTimeEntry(newTimeEntry); //Content.props
    console.log("entry was made");
  };

  return (
    <div className="button-container">
      <StartButton
        onStart={() => {
          props.onStart();
        }}
      />
      <StopButton
        onStop={() => {
          props.onStop();
          if (props.start) {
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
            alert(
              "Der Timer kann ohne das starten des Timers nicht beendet werden"
            );
          }
        }}
      />
      <ResetButton
        onReset={() => {
          props.onReset();
        }}
      />
    </div>
  );
};
