import { Clock } from "./Clock.tsx";
import { TimeEntryTable } from "./timeEntryTable.tsx";
import "./content.css";
import { Actions } from "./actions.tsx";
import { Timer } from "./Timer.tsx";
import { DateTime } from "luxon";
import { TimeEntry, dummyTimeEntries } from "./data.ts";
import { useState } from "react";

export const Content = () => {
  const [timeEntrieArray, setTimeEntrieArray] = //initialisiert die dummydaten zum timeEntryArray
    useState<TimeEntry[]>(dummyTimeEntries);

  const onNewTimeEntry = (newTimeEntry: TimeEntry) => {
    const newEntryID = timeEntrieArray[timeEntrieArray.length - 1].ID + 1;
    newTimeEntry.ID = newEntryID; //verhindert das ungewollte Zuweisen der alten ID
    setTimeEntrieArray([...timeEntrieArray, newTimeEntry]); //erstellt eine Kopie vom Aktuellen timeEntrieArray und setzt den neuen Eintrag hinten dran
  };
  //kann ich nicht einfach Actions in Tim
  return (
    <div className="content">
      <TimeEntryTable timeEntries={timeEntrieArray} />
      <div className="bottomRow">
        <Clock />
        <Timer startStamp={DateTime.now()} />
        <Actions onNewTimeEntry={onNewTimeEntry} />
      </div>
    </div>
  );
};

// Aktuelle Uhrzeit von Startstamp abziehen und anzeigen lassen
//Der aktuelle startStamp ist bislang noch statisch festgelegt und soll
//  durch einen Buttonklick die aktuelle Zeit zugewiesen bekommen.
