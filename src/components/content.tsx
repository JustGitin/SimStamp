import { Clock } from "./Clock.tsx";
import { TimeEntryTable } from "./TimeEntryTable.tsx";
import "./content.css";
import { TimeEntryProps, dummyTimeEntries } from "./dummyEntries.ts";
import { useState } from "react";
import { Timer } from "./Timer.tsx";
import { Actions } from "./Actions.tsx";
import { DateTime } from "luxon";

export const Content = () => {
  const [timeEntryArray, setTimeEntrieArray] =
    useState<TimeEntryProps[]>(dummyTimeEntries);

  const onNewTimeEntry = (newTimeEntry: TimeEntryProps) => {
    const newEntryID = timeEntryArray[timeEntryArray.length - 1].ID + 1;
    newTimeEntry.ID = newEntryID;
    setTimeEntrieArray([...timeEntryArray, newTimeEntry]);
  };
  const [start, setStart] = useState<DateTime | null>(null);

  return (
    <div className="content">
      <TimeEntryTable timeEntries={timeEntryArray} />
      <div className="bottomRow">
        <Clock />
        {start != null ? <Timer start={start} /> : null}
        <Actions
          onNewTimeEntry={onNewTimeEntry}
          start={start}
          onStart={() => {
            setStart(DateTime.now());
          }}
          onStop={() => setStart(null)}
          onReset={() => setStart(null)}
        />
      </div>
    </div>
  );
};
