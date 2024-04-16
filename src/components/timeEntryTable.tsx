import DataGrid, {
  Column,
  DataGridTypes,
  Editing,
  FilterRow,
  HeaderFilter,
  RequiredRule,
  SearchPanel,
  Summary,
  TotalItem,
} from "devextreme-react/data-grid";
import "./timeEntryTable.css";
import { TimeEntryProps } from "./dummyEntries.ts"; //just interface
import { DateTime, Duration } from "luxon";
import { Timer } from "./Timer.tsx";

interface TimeEntryTableProps {
  timeEntries: TimeEntryProps[];
}

function formatDuration(milliseconds: number): string {
  const formattedDuration =
    Duration.fromMillis(milliseconds).toFormat("hh:mm:ss");
  console.log("Danach" + formattedDuration);
  return formattedDuration;
}

export const TimeEntryTable = (props: TimeEntryTableProps) => {
  const renderTimeOutput = (data: {
    data: { StartUhrzeit: string; EndUhrzeit: string | null };
  }) => {
    const start = DateTime.fromISO(data.data.StartUhrzeit);
    const end =
      data.data.EndUhrzeit == null
        ? null
        : DateTime.fromISO(data.data.EndUhrzeit);
    return end == null ? (
      <Timer start={start} />
    ) : (
      formatDuration(end.diff(start).valueOf())
    );
  };
  return (
    <div className="time-entry-table-container">
      <DataGrid
        id="gridContainer"
        dataSource={props.timeEntries}
        keyExpr="ID"
        showBorders={true}
        height="600px"
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
          cellRender={(data) => renderTimeOutput(data)}
        ></Column>
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
            column="Vergangene Zeit"
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
