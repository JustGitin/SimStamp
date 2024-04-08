import { useState } from "react";
import "./actions.css";
import { StopButton } from "./stopButton.tsx";
import { StartButton } from "./startButton.tsx";
import { ResetButton } from "./resetButton.tsx";
import { DateTime, Duration } from "luxon";
import { TimeEntry } from "./data.ts";

export interface ActionProps {
  onNewTimeEntry: (newTimeEntry: TimeEntry) => void;
  startStamp: DateTime; //benötigt sie vom StartButton
}

export const Actions = (props: ActionProps) => {
  const notes = "Hallo, ich bin eine Notiz";
  const projectName = "SimStamp";

  // const [isRunning, setIsRunning] = useState(false);
  const [displayElapsedTime, setDisplayElapsedTime] = useState<string>("0:0:0");
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

  //_____________________________________________________________________________________________________

  const startTimer = (startStamp: DateTime, isRunning: boolean) => {
    const intervalId = setInterval(() => {
      const now = DateTime.now();
      const stampDifference = now.diff(startStamp);
      setElapsedTime(stampDifference);
      setDisplayElapsedTime(formatDuration(stampDifference));
    }, 500);

    if (!isRunning) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  };

  function formatDuration(elapsedTime: Duration): string {
    const hours = elapsedTime
      .shiftTo("hours")
      .hours.toFixed(0)
      .padStart(2, "0");
    const minutes = elapsedTime.minutes.toFixed(0).padStart(2, "0");
    const seconds = elapsedTime.seconds.toFixed(0).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  }

  //_______________________________________________________________________________________________________________

  const createNewEntry = (
    displayElapsedTime: string,
    startStamp: DateTime,
    stopStamp: DateTime,
    projectName: string,
    notes: string
  ) => {
    const now = DateTime.now(); //currentDate ist das Datum zum Zeitpunkt des Eintrags
    const currentDate: string = now.toISODate();
    //const newEntryID = timeEntries[timeEntries.length - 1].ID + 1;

    const newTimeEntry: TimeEntry = {
      ID: 0,
      Datum: currentDate,
      VergangeneZeit: displayElapsedTime,
      StartUhrzeit: formatStamps(startStamp),
      EndUhrzeit: formatStamps(stopStamp),
      Projekt: projectName,
      Notizen: notes,
    };

    props.onNewTimeEntry(newTimeEntry); //erstellt den Eintrag mit der Funktion aus content
    //setTimeEntries([...timeEntries, newTimeEntry]);

    console.log("Eintrag wurde gemacht");
    //Der Eintrag wird an dieser Stelle gemacht, jedoch muss sich auch die Tabelle aktualisieren unter verwendung vom State
  };

  return (
    <div className="button-container">
      <StopButton
        onStop={() => {
          if (startStamp) {
            // setIsRunning(false);
            const stopStamp = DateTime.now();
            const difference = stopStamp.diff(startStamp);
            setElapsedTime(difference);
            setDisplayElapsedTime(formatDuration(difference));

            createNewEntry(
              displayElapsedTime,
              startStamp,
              stopStamp,
              projectName,
              notes
            );
          } else {
            console.log("startStamp is not defined");
          }
        }}
      />
      <StartButton
        onStart={() => {
          // setIsRunning(true);
          setStartStamp(DateTime.now());
          startTimer(startStamp, true);
        }}
      />
      <ResetButton
        onReset={() => {
          setStartStamp(null);
          alert(
            "StartStamp wurde zurückgesetzt vorausgesetzt, du hast ihn noch nicht mit Stopp gespeichert"
          );
        }}
      />
    </div>
  );
};
