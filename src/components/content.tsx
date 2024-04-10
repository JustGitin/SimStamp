import { Clock } from "./Clock.tsx";
import { TimeEntryTable } from "./timeEntryTable.tsx";
import "./content.css";
import { Actions } from "./actions.tsx";
import { TimeEntry, dummyTimeEntries } from "./data.ts";
import { useState } from "react";

export const Content = () => {
  const [timeEntryArray, setTimeEntrieArray] =
    useState<TimeEntry[]>(dummyTimeEntries);

  const onNewTimeEntry = (newTimeEntry: TimeEntry) => {
    const newEntryID = timeEntryArray[timeEntryArray.length - 1].ID + 1;
    newTimeEntry.ID = newEntryID;
    setTimeEntrieArray([...timeEntryArray, newTimeEntry]);
  };
  return (
    <div className="content">
      <TimeEntryTable timeEntries={timeEntryArray} />
      <div className="bottomRow">
        <Clock />
        <Actions onNewTimeEntry={onNewTimeEntry} />
      </div>
    </div>
  );
};
