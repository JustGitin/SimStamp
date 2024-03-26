import DataGrid from "devextreme-react/data-grid";
import { customers } from "./data";
import "./timeEntryTable.css";

const columns = [
  "Vergangene Zeit",
  "Start Uhrzeit",
  "End Uhrzeit",
  "Projekt",
  "Notizen(#)",
];

export const TimeEntryTable = () => (
  <DataGrid
    dataSource={customers}
    keyExpr="ID"
    defaultColumns={columns}
    showBorders={true}
  />
);
