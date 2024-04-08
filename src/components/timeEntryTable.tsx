import DataGrid, {
  Column,
  Editing,
  RequiredRule,
  SearchPanel,
} from "devextreme-react/data-grid";
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
        <Column dataField="Datum" /*caption=""*/>
          <RequiredRule />
        </Column>
        <Column dataField="VergangeneZeit">
          <RequiredRule />
        </Column>
        <Column dataField="StartUhrzeit">
          <RequiredRule />
        </Column>
        <Column dataField="EndUhrzeit">
          <RequiredRule />
        </Column>
        <Column dataField="Projekt">
          <RequiredRule />
        </Column>
        <Column dataField="Notizen">
          <RequiredRule />
        </Column>
        <Editing
          mode="popup"
          allowUpdating={true}
          allowDeleting={true}
          allowAdding={true}
        />
      </DataGrid>
    </div>
  );
};
