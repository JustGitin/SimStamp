import DataGrid, { Column } from "devextreme-react/data-grid";
import "./timeEntryTable.css";
import { useTimeEntries } from "./data.ts";

export const TimeEntryTable = () => {
  const { timeEntries } = useTimeEntries();
  return (
    <DataGrid
      dataSource={timeEntries}
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
