export interface TimeEntry {
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
    VergangeneZeit: 13435645, //in Milisekunden
    StartUhrzeit: "2024-03-29T11:00",
    EndUhrzeit: "2024-03-29T12:00",
    Projekt: "Projekt A",
    Notizen: "Notizen zu Projekt A",
  },
  {
    ID: 2,
    Datum: "2024-03-30",
    VergangeneZeit: 23445645,
    StartUhrzeit: "2024-03-30T13:00",
    EndUhrzeit: "2024-03-30T14:00",
    Projekt: "Projekt B",
    Notizen: "Notizen zu Projekt B",
  },
  // {
  //   ID: 3,
  //   Datum: "2024-03-31",
  //   VergangeneZeit: "14:00",
  //   StartUhrzeit: "15:00",
  //   EndUhrzeit: "16:00",
  //   Projekt: "Projekt C",
  //   Notizen: "Notizen zu Projekt C",
  // },
  // {
  //   ID: 4,
  //   Datum: "2024-04-01",
  //   VergangeneZeit: "16:00",
  //   StartUhrzeit: "17:00",
  //   EndUhrzeit: "18:00",
  //   Projekt: "Projekt D",
  //   Notizen: "Notizen zu Projekt D",
  // },
  // {
  //   ID: 5,
  //   Datum: "2024-04-02",
  //   VergangeneZeit: "18:00",
  //   StartUhrzeit: "19:00",
  //   EndUhrzeit: "20:00",
  //   Projekt: "Projekt E",
  //   Notizen: "Notizen zu Projekt E",
  // },
  // {
  //   ID: 6,
  //   Datum: "2024-04-03",
  //   VergangeneZeit: "20:00",
  //   StartUhrzeit: "21:00",
  //   EndUhrzeit: "22:00",
  //   Projekt: "Projekt F",
  //   Notizen: "Notizen zu Projekt F",
  // },
  // {
  //   ID: 7,
  //   Datum: "2024-04-04",
  //   VergangeneZeit: "22:00",
  //   StartUhrzeit: "23:00",
  //   EndUhrzeit: "00:00",
  //   Projekt: "Projekt G",
  //   Notizen: "Notizen zu Projekt G",
  // },
  // Weitere Einträge ...
];
