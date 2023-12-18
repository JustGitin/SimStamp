import { useEffect, useState } from "react";
import { DateTime } from "luxon";

export const Timer = () => {
  //hält currentDateTime aktuell
  const [currentDateTime, setCurrentDateTime] = useState(DateTime.now());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(DateTime.now());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <span>{currentDateTime.toFormat("hh:mm:ss")}</span>;
};

//elapsed Time auch hier rein?
//Ich würde die Logik der tatsächlichen Funktion der SimpStamp Applikation in ein separates folder packen
