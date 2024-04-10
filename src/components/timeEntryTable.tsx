import DataGrid, {
  Column,
  Editing,
  FilterRow,
  HeaderFilter,
  RequiredRule,
  SearchPanel,
  Summary,
  TotalItem,
} from "devextreme-react/data-grid";
import "./timeEntryTable.css";
import { TimeEntry } from "./data"; //ist nur das interface
import { Duration } from "luxon";

interface TimeEntryTableProps {
  timeEntries: TimeEntry[];
}

export const TimeEntryTable = (props: TimeEntryTableProps) => {
  function formatDuration(milliseconds: number): string {
    const duration = Duration.fromMillis(milliseconds);
    const formattedDuration = duration.toFormat("hh:mm:ss"); // darf nicht zum String, muss Zwischenfromatiert werden
    return formattedDuration;
  }

  return (
    <div className="time-entry-table-container">
      <DataGrid
        dataSource={props.timeEntries}
        keyExpr="ID"
        showBorders={true}
        height="600px" // Hier die gewünschte Höhe einstellen
      >
        <FilterRow visible={true} />
        <HeaderFilter visible={true} />
        <SearchPanel visible={true} />
        <Column dataField="Datum" dataType="date" alignment="center">
          <RequiredRule />
        </Column>
        <Column
          dataField="VergangeneZeit"
          dataType="number"
          cellRender={(data) => formatDuration(data.value)}
          alignment="center"
        >
          <RequiredRule />
        </Column>
        <Column dataField="StartUhrzeit" dataType="datetime" alignment="center">
          <RequiredRule />
        </Column>
        <Column dataField="EndUhrzeit" dataType="datetime" alignment="center">
          <RequiredRule />
        </Column>
        <Column dataField="Projekt" alignment="center">
          <RequiredRule />
        </Column>
        <Column dataField="Notizen" alignment="center">
          <RequiredRule />
        </Column>
        <Summary>
          <TotalItem
            column="VergangeneZeit"
            summaryType="sum"
            valueFormat={formatDuration}
            alignment="center"
          />
        </Summary>
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
