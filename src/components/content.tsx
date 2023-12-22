import { Clock } from "./Clock.tsx";
import { TimeEntryTable } from "./timeEntryTable.tsx";
import "./content.css";
import { Actions } from "./actions.tsx";
import { Timer } from "./Timer.tsx";

export const Content = () => {
  return (
    <>
      <TimeEntryTable />
      <Clock />
      <Timer />
      <Actions />
    </>
  );
};

// Aktuelle Uhrzeit von Startstamp abziehen und anzeigen lassen
