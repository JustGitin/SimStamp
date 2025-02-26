import { Clock } from "./Clock.tsx";
import { TimeEntryTable } from "./TimeEntryTable.tsx";
import "./content.css";
import { TimeEntry, dummyTimeEntries } from "./DummyEntries.ts";
import { useState } from "react";
import { Timer } from "./Timer.tsx";
import { Actions } from "./Actions.tsx";
import { DateTime } from "luxon";

export const Content = () => {
  const [timeEntryArray, setTimeEntrieArray] =
    useState<TimeEntry[]>(dummyTimeEntries);

  const onNewTimeEntry = (newTimeEntry: TimeEntry) => {
    if (timeEntryArray.length != 0) {
      const newEntryID = timeEntryArray[timeEntryArray.length - 1].ID + 1;
      newTimeEntry.ID = newEntryID;
      setTimeEntrieArray([...timeEntryArray, newTimeEntry]);
    } else {
      newTimeEntry.ID = 1;
      setTimeEntrieArray([newTimeEntry]);
    }
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
