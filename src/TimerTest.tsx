import React, { useEffect, useRef, useState } from "react";
import { DateTime } from "luxon";
import { TimerProps } from "./interface";

export const timeLoop = () => {
  //hält currentDateTime aktuell
  const [currentDateTime, setCurrentDateTime] = useState(DateTime.now());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(DateTime.now());
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  return currentDateTime;
};

export const setStamp = (
  currentTimer: DateTime[][],
  currentDateTime: DateTime
) => {
  const startStamp = useRef(currentDateTime);
  //const [newTimeRange,setNewTimeRange] = useState([startStamp.current,DateTime.now()]);
  useEffect(() => {
    //wenn neuerTimer
    //setNewTimeRange([startStamp.current, DateTime.now()]);
    const timeRangeArray = [startStamp.current, DateTime.now()];
    currentTimer.push(timeRangeArray);
    startStamp.current = DateTime.now(); //erst nach dem pushen
  }, [currentTimer]);
  return startStamp;
};
//schleife lässt sich noch nicht beenden, da ein beenden zu einem push der neuen Timerage führt und somit currentTimer verändert, was useEffect triggert

//   const now = DateTime.now().toString();
//   console.log(now); // Example usage

// /   const [time, setTime] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   const startTimer = () => {
//     setIsRunning(true);
//   };

//   const stopTimer = () => {
//     setIsRunning(false);
//     onClick({ h: 1, min: 0 });
//   };

//   const resetTimer = () => {
//     setTime(0);
//   };

//   return (
//     <div>
//       <div>{time}</div>
//       <button onClick={startTimer}>Start</button>
//       <button onClick={stopTimer}>Stop</button>
//       <button onClick={resetTimer}>Reset</button>
//     </div>
//   );
// };

//   return [];
// };
// export default Timer;

// {
//     onClick,
//     projectTitle,
//     description,
// }
