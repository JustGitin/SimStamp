import { useEffect, useState } from "react";
import "./actions.css";
import { StopButton } from "./stopButton.tsx";
import { StartButton } from "./startButton.tsx";
import { ResetButton } from "./resetButton.tsx";
import { DateTime, Duration } from "luxon";
import { TimeEntry } from "./dummyEntries.ts";

export interface ActionProps {
  onNewTimeEntry: (newTimeEntry: TimeEntry) => void;
}

export const Actions = (props: ActionProps) => {
  const notes = "Hallo, ich bin eine Notiz";
  const projectName = "SimStamp";

  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const [displayElapsedTime, setDisplayElapsedTime] = useState<string>("0:0:0");
  const [startStamp, setStartStamp] = useState<DateTime | null>(null);
  const [elapsedTimeMillisec, setElapsedTimeMillisec] = useState<number>(0);

  //___________________________________________________________________________________________________
  const startTimer = (startStamp: DateTime, timerIsRunning: boolean) => {
    const intervalId = setInterval(() => {
      const now = DateTime.now();
      const stampDifference: Duration = now.diff(startStamp);
      const newTimeMilisec = stampDifference.valueOf();
      setElapsedTimeMillisec(newTimeMilisec);
      setDisplayElapsedTime(formatDuration(newTimeMilisec));
      const test = displayElapsedTime;
      console.log(test);
    }, 500);

    if (!timerIsRunning) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  };
  useEffect(() => {
    setDisplayElapsedTime(formatDuration(elapsedTimeMillisec));
  }, [elapsedTimeMillisec]);

  function formatDuration(milliseconds: number): string {
    const duration = Duration.fromMillis(milliseconds);
    const formattedDuration = duration.toFormat("hh:mm:ss");
    return formattedDuration;
  }
  //_______________________________________________________________________________________________________

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
      <StartButton
        onStart={() => {
          setStartStamp(DateTime.now());
          setTimerIsRunning(true);
          //startTimer(DateTime.now(), true);
        }}
      />

      <StopButton
        onStop={() => {
          if (startStamp && timerIsRunning) {
            //nur ausführen wenn startstamp neu bzw aktuell ist
            setTimerIsRunning(false);
            const stopStamp = DateTime.now();
            const difference = stopStamp.diff(startStamp);
            const newTime = difference.valueOf();
            setElapsedTimeMillisec(newTime);
            createNewEntry(newTime, startStamp, stopStamp, projectName, notes);
          } else {
            alert(
              "Der Timer kann ohne das Starten des Timers nicht beendet werden"
            );
          }
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
