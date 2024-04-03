import { useState } from "react";

interface TimeEntry {
  ID: number;
  Datum: string;
  VergangeneZeit: string;
  StartUhrzeit: string;
  EndUhrzeit: string;
  Projekt: string;
  Notizen: string;
}
export const useTimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([
    {
      ID: 1,
      Datum: "Montag, 2024-03-29",
      VergangeneZeit: "10:00",
      StartUhrzeit: "11:00",
      EndUhrzeit: "12:00",
      Projekt: "Projekt A",
      Notizen: "Notizen zu Projekt A",
    },
    {
      ID: 2,
      Datum: "Dienstag, 2024-03-30",
      VergangeneZeit: "12:00",
      StartUhrzeit: "13:00",
      EndUhrzeit: "14:00",
      Projekt: "Projekt B",
      Notizen: "Notizen zu Projekt B",
    },
    {
      ID: 3,
      Datum: "Mittwoch, 2024-03-31",
      VergangeneZeit: "14:00",
      StartUhrzeit: "15:00",
      EndUhrzeit: "16:00",
      Projekt: "Projekt C",
      Notizen: "Notizen zu Projekt C",
    },
    {
      ID: 4,
      Datum: "Donnerstag, 2024-04-01",
      VergangeneZeit: "16:00",
      StartUhrzeit: "17:00",
      EndUhrzeit: "18:00",
      Projekt: "Projekt D",
      Notizen: "Notizen zu Projekt D",
    },
    {
      ID: 5,
      Datum: "Freitag, 2024-04-02",
      VergangeneZeit: "18:00",
      StartUhrzeit: "19:00",
      EndUhrzeit: "20:00",
      Projekt: "Projekt E",
      Notizen: "Notizen zu Projekt E",
    },
    {
      ID: 6,
      Datum: "Samstag, 2024-04-03",
      VergangeneZeit: "20:00",
      StartUhrzeit: "21:00",
      EndUhrzeit: "22:00",
      Projekt: "Projekt F",
      Notizen: "Notizen zu Projekt F",
    },
    {
      ID: 7,
      Datum: "Sonntag, 2024-04-04",
      VergangeneZeit: "22:00",
      StartUhrzeit: "23:00",
      EndUhrzeit: "00:00",
      Projekt: "Projekt G",
      Notizen: "Notizen zu Projekt G",
    },
    // Weitere Einträge ...
  ]);
  return { timeEntries, setTimeEntries };
};

// export const timeEntries = [
