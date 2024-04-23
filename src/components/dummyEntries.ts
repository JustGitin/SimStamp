export interface TimeEntry {
  ID: number;
  StartTime: string;
  EndTime: string;
  Project?: string;
  notes?: string;
}

export const TimeEntryKeys: Record<string, keyof TimeEntry> = {
  ID: "ID",
  START_TIME: "StartTime",
  END_TIME: "EndTime",
  PROJECT: "Project",
  NOTES: "notes",
} as const;

export const dummyTimeEntries: TimeEntry[] = [
  {
    ID: 1,
    StartTime: "2024-03-29T11:35",
    EndTime: "2024-03-29T12:46",
  },
  {
    ID: 2,
    StartTime: "2024-03-30T13:55",
    EndTime: "2024-03-30T14:28",
    Project: "Projekt B",
    notes: "Notizen zu Projekt B",
  },
  {
    ID: 3,
    StartTime: "15:00",
    EndTime: "16:00",
    Project: "Projekt C",
  },
];
