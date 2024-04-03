import { useState } from "react";
import "./actions.css";
import { StopButton } from "./stopButton.tsx";
import { StartButton } from "./startButton.tsx";
import { ResetButton } from "./resetButton.tsx";
import { DateTime, Duration } from "luxon";
import { TimeEntry } from "./data.ts";

interface ActionProps {
  onNewTimeEntry: (newTimeEntry: TimeEntry) => void;
}

export const Actions = (props: ActionProps) => {
  //const { timeEntries, setTimeEntries } = useTimeEntries();
  const notes = "Hallo, ich bin eine Notiz";
  const projectName = "SimStamp";

  const [isRunning, setIsRunning] = useState(false);
  const [startStamp, setStartStamp] = useState<DateTime | null>(null);
  const [elapsedTime, setElapsedTime] = useState<Duration>(
    Duration.fromMillis(0)
  );

  const formatStamps = (varToFormat: DateTime | null): string => {
    if (varToFormat === null) {
      console.log("Invalid DateTime");
      return "Invalid DateTime";
    }
    return varToFormat.toFormat("HH:mm:ss");
  };

  function formatDuration(elapsedTime: Duration): string {
    return `${Math.floor(elapsedTime.as("hours"))}:${elapsedTime.toFormat(
      "mm:ss"
    )}`;
  }

  const calculateDifference = (stopStamp: DateTime, startStamp: DateTime) => {
    const difference = stopStamp.diff(startStamp);
    setElapsedTime(difference);
  };
  const createNewEntry = (
    startStamp: DateTime,
    stopStamp: DateTime,
    projectName: string,
    notes: string
  ) => {
    const now = DateTime.now(); //currentDate ist das Datum zum Zeitpunkt des Eintrags
    const currentDate: string = now.toISODate();
    //const newEntryID = timeEntries[timeEntries.length - 1].ID + 1;

    let newTimeEntry: TimeEntry = {
      ID: 0,
      Datum: currentDate,
      VergangeneZeit: formatDuration(elapsedTime),
      StartUhrzeit: formatStamps(startStamp),
      EndUhrzeit: formatStamps(stopStamp),
      Projekt: projectName,
      Notizen: notes,
    };

    props.onNewTimeEntry(newTimeEntry);
    //setTimeEntries([...timeEntries, newTimeEntry]);

    alert("Eintrag wurde gemacht");
    //Der Eintrag wird an dieser Stelle gemacht, jedoch muss sich auch die Tabelle aktualisieren unter verwendung vom State
  };

  return (
    <>
      <div className="button-container">
        <StopButton
          onStop={() => {
            if (startStamp) {
              setIsRunning(false);
              const stopStamp = DateTime.now();
              calculateDifference(stopStamp, startStamp);
              createNewEntry(startStamp, stopStamp, projectName, notes);
            } else {
              console.log("startStamp is not defined");
            }
          }}
        />
        <StartButton
          onStart={() => {
            setIsRunning(true);
            setStartStamp(DateTime.now());
          }}
        />
        <ResetButton
          onReset={() => {
            setIsRunning(false);
            setStartStamp(null);
            alert(
              "StartStamp wurde zurückgesetzt vorausgesetzt, du hast ihn noch nicht mit Stopp gespeichert"
            );
          }}
        />
      </div>
      <div style={{ color: "green", fontWeight: 400 }}>
        isRunning:{String(isRunning)}
      </div>
    </>
  );
};
