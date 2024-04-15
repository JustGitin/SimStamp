import { DateTime, Duration } from "luxon";
import React, { useState, useEffect, useRef } from "react";
import { Actions } from "./actions";
interface TimerProps {
  notes: string;
  projectName: string;

  createNewEntry: (
    displayElapsedTime: number,
    startStamp: DateTime,
    stopStamp: DateTime,
    projectName: string,
    notes: string
  ) => void;
}

export const Timer: React.FC<TimerProps> = (props) => {
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [elapsedTimeMillisec, setElapsedTimeMillisec] = useState<number>(0);
  const [startStamp, setStartStamp] = useState<DateTime | null>(null);

  useEffect(() => {
    return () => {
      //retunt einmalig die Aufräumfunktion
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startTimer = () => {
    if (!isRunning) {
      //verhindert das mehrfache Starten des Timers
      const currentDateTime = DateTime.now();
      setStartStamp(currentDateTime);
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        const now = DateTime.now();
        const stampDifference: Duration = now.diff(currentDateTime);
        const newTimeMillisec = stampDifference.valueOf();
        setElapsedTimeMillisec(newTimeMillisec);

        //Das Problem ist dass Startstamp nicht rechzeitig gesetzt wird bevor die Differenz berechnet wird.
        //ich weiß noch nicht wie ich in die Data nachträglich pushen kann, sodass der Eintrag mit der laufenden Zeit nachträglich erfasst werden kann
      }, 500);
    }
  };

  const stopTimer = () => {
    if (isRunning && startStamp != null) {
      setIsRunning(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      const stopStamp = DateTime.now();
      props.createNewEntry(
        elapsedTimeMillisec,
        startStamp,
        stopStamp,
        props.projectName,
        props.notes
      );
    } else {
      alert("Der Timer kann ohne das Starten des Timers nicht beendet werden");
    }
  };

  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setStartStamp(null);
    setIsRunning(false);
  };

  return (
    <div>
      {/* <Actions                
        startTimer={startTimer}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
      /> */}
    </div>
  );
};
