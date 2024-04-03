import { Clock } from "./Clock.tsx";
import { TimeEntryTable } from "./timeEntryTable.tsx";
import "./content.css";
import { Actions } from "./actions.tsx";
import { Timer } from "./Timer.tsx";
import { DateTime, Duration } from "luxon";

export const Content = () => {
  //const [currentTimeStamp, setCurrentTimestamp] = useState<Duration>();

  const handleTimeChanged = (newDate: Duration) => {
    // setCurrentTimestamp(newDate); //wenn sich die zeit verändert hat
  };
  return (
    <>
      <TimeEntryTable />
      <Clock />
      <Timer startStamp={DateTime.now()} onTimechanged={handleTimeChanged} />
      <Actions />
    </>
  );
};

// Aktuelle Uhrzeit von Startstamp abziehen und anzeigen lassen
//Der aktuelle startStamp ist bislang noch statisch festgelegt und soll
//  durch einen Buttonklick die aktuelle Zeit zugewiesen bekommen.
