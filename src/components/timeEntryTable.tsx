import DataGrid from "devextreme-react/data-grid";
import "./timeEntryTable.css";
import { timeEntries } from "./data.ts";

const columns = [
  "Datum",
  "Vergangene Zeit",
  "Start Uhrzeit",
  "End Uhrzeit",
  "Projekt",
  "Notizen(#)",
];

export const TimeEntryTable = () => (
  <DataGrid
    dataSource={timeEntries}
    keyExpr="ID"
    defaultColumns={columns}
    showBorders={true}
    className="custom-datagrid"
  />
);
