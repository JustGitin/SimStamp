import { Clock } from "./Clock.tsx";
import { TimeEntryTable } from "./timeEntryTable.tsx";
import "./content.css";
import { Actions } from "./actions.tsx";
import { Timer } from "./Timer.tsx";
import { DateTime } from "luxon";
import { TimeEntry, dummyTimeEntries } from "./data.ts";
import { useState } from "react";

export const Content = () => {
  const [timeEntrieArray, setTimeEntrieArray] =
    useState<TimeEntry[]>(dummyTimeEntries);

  const onNewTimeEntry = (newTimeEntry: TimeEntry) => {
    const newEntryID = timeEntrieArray[timeEntrieArray.length - 1].ID + 1;
    newTimeEntry.ID = newEntryID;
    setTimeEntrieArray([...timeEntrieArray, newTimeEntry]);
    // TODO: Add new time entry to state
  };

  return (
    <>
      <TimeEntryTable timeEntries={timeEntrieArray} />
      <Clock />
      <Timer startStamp={DateTime.now()} />
      {/* TODO: Define onNewTimeEntry in props of Actions component */}
      <Actions onNewTimeEntry={onNewTimeEntry} />
    </>
  );
};

// Aktuelle Uhrzeit von Startstamp abziehen und anzeigen lassen
//Der aktuelle startStamp ist bislang noch statisch festgelegt und soll
//  durch einen Buttonklick die aktuelle Zeit zugewiesen bekommen.
