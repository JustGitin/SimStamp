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
import { TimeEntry } from "./dummyEntries"; //ist nur das interface
import { DateTime, Duration } from "luxon";

interface TimeEntryTableProps {
  timeEntries: TimeEntry[];
}

export const TimeEntryTable = (props: TimeEntryTableProps) => {
  const calculateCellValue = (rowData: TimeEntry) => {
    const stopStamp = DateTime.fromISO(rowData.EndUhrzeit).toMillis();
    const startStamp = DateTime.fromISO(rowData.StartUhrzeit).toMillis();
    const difference = stopStamp - startStamp;
    //new Date(rowData.EndUhrzeit).getTime(); //Standard Javascript
    return difference;
  };
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
          caption="Vergangene Zeit"
          dataType="number"
          alignment="center"
          calculateCellValue={calculateCellValue}
          cellRender={(data) => formatDuration(data.value)}
        >
          <RequiredRule />
        </Column>
        <Column
          dataField="StartUhrzeit"
          dataType="datetime"
          alignment="center"
          cellRender={(data) =>
            DateTime.fromJSDate(data.value).toFormat("HH:mm")
          }
        >
          <RequiredRule />
        </Column>
        <Column
          dataField="EndUhrzeit"
          dataType="datetime"
          alignment="center"
          cellRender={(data) =>
            DateTime.fromJSDate(data.value).toFormat("HH:mm")
          }
        >
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
