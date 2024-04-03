import { useEffect, useState } from "react";
import "./timer.css";
import { DateTime, Duration } from "luxon";

interface MyTimerProps {
  startStamp: DateTime;
  // onTimechanged: (currentTime: Duration) => void;
}

export const Timer: React.FC<MyTimerProps> = (props) => {
  const [elapsedTime, setElapsedTime] = useState<Duration>(
    Duration.fromMillis(0)
  );
  const [displayElapsedTime, setDisplayElapsedTime] = useState<String>("0:0:0");

  useEffect(() => {
    const fetchData = () => {
      const intervalId = setInterval(() => {
        const now = DateTime.now(); //verhindert das abspeichern des alten Wertes bevor der neue gefetcht wurde
        const difference = now.diff(props.startStamp);
        setElapsedTime(difference); //falls undefined
        // props.onTimechanged(difference);
      }, 500);
      return () => clearInterval(intervalId);
    };

    return fetchData();
  }, [props.startStamp]); //erst nach erhalt des StartStamps wird das Interval aufgerufen

  useEffect(() => {
    setDisplayElapsedTime(formatDuration(elapsedTime));
  }, [elapsedTime]);

  function formatDuration(elapsedTime: Duration): string {
    return `${Math.floor(elapsedTime.as("hours"))}:${elapsedTime.toFormat(
      //hier nochmal in Luxon nachschauen, vermutlich nicht die beste Lösung auf diese weises
      "mm:ss"
    )}`;
  }

  return displayElapsedTime;
};

//problem ist die asyncrone abfrage der Zeit, Timer muss von Buttons aufgerufen werden können und den StartStamp nur beim ersten rendern setzen
//eine Komponente daraus machen sodass die eine für das anzeigen der vergangenen zeit seit dem setzen des Simstamps verantwortlich ist und beim
//Stoppen das intervall unterbricht sowie die Duration abspeichert sodass beim erneuten Starten des Timers da angefangen werden kann wo letztes mal
//gestoppt wurden oder beim neu anlegen einer Spalte mit einem Neuen timer das derzeitige Reset durchgeführt werden soll was lediglich einen neuen
//StartStamp hineingibt. Dieser Knopf soll ja durch den Hinzufügebutton eines neuen zeiteneintrags ersetzt werden
