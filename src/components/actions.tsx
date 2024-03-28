import { useState } from "react";
import "./actions.css";
import { StopButton } from "./stopButton.tsx";
import { StartButton } from "./startButton.tsx";
import { ResetButton } from "./resetButton.tsx";
import { DateTime, Duration } from "luxon";
import { timeEntries } from "./data.ts";

export const Actions = () => {
  const notes = "Hallo, ich bin eine Notiz";
  const projectName = "SimStamp";

  const [isRunning, setIsRunning] = useState(false);
  const [startStamp, setStartStamp] = useState<DateTime | null>(null);
  const [stopStamp, setStopStamp] = useState<DateTime | null>(null);
  const [elapsedTime, setElapsedTime] = useState<Duration>(
    Duration.fromMillis(0)
  );

  const formatStamps = (varToFormat: DateTime): string => {
    return varToFormat.toFormat("HH:mm:ss");
  };

  function formatDuration(elapsedTime: Duration): string {
    return `${Math.floor(elapsedTime.as("hours"))}:${elapsedTime.toFormat(
      "mm:ss"
    )}`;
  }
  //Die idee ist ein Array mit allen Parametern welches mit einer forEach durchlaufen wird und jeden Eintrag in einen String formatiert,bevor der neue Eintrag erstellt wird
  //ideal wäre das ausgrenzen der Strings um keine redundante Formatierung zu machen

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
    const newEntryID = timeEntries[timeEntries.length - 1].ID + 1;

    let newTimeEntry = {
      ID: newEntryID,
      Datum: currentDate,
      VergangeneZeit: formatDuration(elapsedTime),
      StartUhrzeit: formatStamps(startStamp),
      EndUhrzeit: formatStamps(stopStamp),
      Projekt: projectName,
      Notizen: notes,
    };
    timeEntries.push(newTimeEntry);
  };

  return (
    <>
      <div className="button-container">
        <StopButton
          onStop={() => {
            if (startStamp) {
              setIsRunning(false);
              const now = DateTime.now();
              setStopStamp(now);
              calculateDifference(now, startStamp);
              createNewEntry(startStamp, stopStamp!, projectName, notes); //ACHTUNG SCHUMMLEREI MIT !
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
