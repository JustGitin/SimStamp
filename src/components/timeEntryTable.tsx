import DataGrid, { Column, SearchPanel } from "devextreme-react/data-grid";
import "./timeEntryTable.css";
import { TimeEntry } from "./data";

interface TimeEntryTableProps {
  timeEntries: TimeEntry[];
}

export const TimeEntryTable = (props: TimeEntryTableProps) => {
  return (
    <div className="time-entry-table-container">
      <DataGrid
        dataSource={props.timeEntries}
        keyExpr="ID"
        showBorders={true}
        className="custom-datagrid"
        height="600px" // Hier die gewünschte Höhe einstellen
      >
        <SearchPanel visible={true} width={240} placeholder="Search..." />
        <Column dataField="Datum" /*caption=""*/></Column>
        <Column dataField="VergangeneZeit"></Column>
        <Column dataField="StartUhrzeit"></Column>
        <Column dataField="EndUhrzeit"></Column>
        <Column dataField="Projekt"></Column>
        <Column dataField="Notizen"></Column>
      </DataGrid>
    </div>
  );
};
