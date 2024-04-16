export interface TimeEntryProps {
  ID: number;
  Datum: string;
  VergangeneZeit: number;
  StartUhrzeit: string;
  EndUhrzeit: string;
  Projekt: string;
  Notizen: string;
}
export const dummyTimeEntries = [
  {
    ID: 1,
    Datum: "2024-03-29",
    VergangeneZeit: 13435645, //milliseconds
    StartUhrzeit: "2024-03-29T11:35",
    EndUhrzeit: "2024-03-29T12:46",
    Projekt: "Projekt A",
    Notizen: "Notizen zu Projekt A",
  },
  {
    ID: 2,
    Datum: "2024-03-30",
    VergangeneZeit: 23445645,
    StartUhrzeit: "2024-03-30T13:55",
    EndUhrzeit: "2024-03-30T14:28",
    Projekt: "Projekt B",
    Notizen: "Notizen zu Projekt B",
  },
  {
    ID: 3,
    Datum: "2024-03-31",
    VergangeneZeit: 3600000,
    StartUhrzeit: "15:00",
    EndUhrzeit: "16:00",
    Projekt: "Projekt C",
    Notizen: "Notizen zu Projekt C",
  },
];
