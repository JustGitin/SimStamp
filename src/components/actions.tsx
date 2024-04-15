import "./actions.css";
import { StopButton } from "./stopButton.tsx";
import { StartButton } from "./startButton.tsx";
import { ResetButton } from "./resetButton.tsx";
import { DateTime } from "luxon";
import { TimeEntry } from "./dummyEntries.ts";
import { Timer } from "./Timer.tsx";

export interface ActionProps {
  onNewTimeEntry: (newTimeEntry: TimeEntry) => void;
  // startTimer: () => void;
  // stopTimer: () => void;
  // resetTimer: () => void;
}

export const Actions = (props: ActionProps) => {
  const notes = "Hallo, ich bin eine Notiz";
  const projectName = "SimStamp";

  // function formatDuration(milliseconds: number): string {
  //   const duration = Duration.fromMillis(milliseconds);
  //   const formattedDuration = duration.toFormat("hh:mm:ss");
  //   return formattedDuration;
  // }

  const createNewEntry = (
    displayElapsedTime: number,
    startStamp: DateTime,
    stopStamp: DateTime,
    projectName: string,
    notes: string
  ) => {
    const now = DateTime.now(); //currentDate ist das Datum zum Zeitpunkt des Eintrags
    const currentDate: string = now.toISODate();

    const newTimeEntry: TimeEntry = {
      ID: 0,
      Datum: currentDate,
      VergangeneZeit: displayElapsedTime,
      StartUhrzeit: startStamp.toISO()!,
      EndUhrzeit: stopStamp.toISO()!,
      Projekt: projectName,
      Notizen: notes,
    };

    props.onNewTimeEntry(newTimeEntry); //erstellt den Eintrag mit der Funktion aus Content
    console.log("Eintrag wurde gemacht");
  };

  return (
    
    <div className="button-container">
      <Timer
        createNewEntry={createNewEntry}
        notes={notes}
        projectName={projectName}
      />
      
      <StartButton onStart={() => /*props.startTimer()*/} />

      <StopButton onStop={() => /*props.stopTimer()*/} />

      <ResetButton onReset={() => alert("fix props")/*props.resetTimer()*/} />
    </div>
  ); 
};
