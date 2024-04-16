import { DateTime } from "luxon";
import { useState, useEffect } from "react";

export const Timer = ({ start }: { start: DateTime }) => {
  const duration = useElapsedTime(start);
  return <div style={{ color: "black" }}>{duration.toFormat("hh:mm:ss")}</div>;
};

const useElapsedTime = (start: DateTime) => {
  const [elapsedTime, setElapsedTime] = useState(DateTime.now().diff(start));

  useEffect(() => {
    const interval = setInterval(() => {
      const duration = DateTime.now().diff(start);
      setElapsedTime(duration);
    }, 1000);

    return () => clearInterval(interval);
  }, [start]);
  return elapsedTime;
};
