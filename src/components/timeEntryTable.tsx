import DataGrid, { Column } from "devextreme-react/data-grid";
import "./timeEntryTable.css";
import { timeEntries } from "./data.ts";

export const TimeEntryTable = () => (
  <DataGrid
    dataSource={timeEntries}
    keyExpr="ID"
    // defaultColumns={columns}
    showBorders={true}
    className="custom-datagrid"
  >
    <Column dataField="Datum" /*caption=""*/></Column>
    <Column dataField="VergangeneZeit"></Column>
    <Column dataField="StartUhrzeit"></Column>
    <Column dataField="EndUhrzeit"></Column>
    <Column dataField="Projekt"></Column>
    <Column dataField="Notizen"></Column>
  </DataGrid>
);
