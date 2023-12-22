import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import "./clock.css";

export const Clock = () => {
  //hält currentDateTime aktuell
  const [currentDateTime, setCurrentDateTime] = useState(DateTime.now());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(DateTime.now());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="time-container">
      <span>{currentDateTime.toFormat("hh:mm:ss")} Uhr</span>
    </div>
  );
};
