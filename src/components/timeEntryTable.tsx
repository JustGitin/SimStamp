import DataGrid, { Column } from "devextreme-react/data-grid";
import "./timeEntryTable.css";
import { TimeEntry } from "./data";

interface TimeEntryTableProps {
  timeEntries: TimeEntry[];
}

export const TimeEntryTable = (props: TimeEntryTableProps) => {
  return (
    <DataGrid
      dataSource={props.timeEntries}
      keyExpr="ID"
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
};
