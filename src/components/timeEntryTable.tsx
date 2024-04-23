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
import { TimeEntry, TimeEntryKeys } from "./DummyEntries.ts";
import { DateTime, Duration } from "luxon";

interface TimeEntryTableProps {
  timeEntries: TimeEntry[];
}

const formatDuration = (milliseconds: number): string =>
  Duration.fromMillis(milliseconds).toFormat("hh:mm:ss");

const formatMillisAsDuration = (totalDuration: number): string => {
  return formatDuration(totalDuration);
};
const renderDate = (data: { value?: DateTime }) => {
  if (DateTime.isDateTime(data.value)) {
    return data.value.toFormat("dd.MM.yyyy");
  } else {
    return "Ungültiges Datum";
  }
};

export const TimeEntryTable = (props: TimeEntryTableProps) => {
  return (
    <div className="time-entry-table-container">
      <DataGrid<TimeEntry>
        dataSource={props.timeEntries}
        keyExpr="ID"
        showBorders={true}
        height="600px"
        rowAlternationEnabled={true}
        onInitNewRow={(e) => {
          const startTime = DateTime.now();
          e.data.StartTime = startTime.toISO();
          e.data.EndTime = startTime.plus({ hours: 1 }).toISO();
        }}
      >
        <FilterRow visible={true} />
        <HeaderFilter visible={true} />
        <SearchPanel visible={true} />
        <Column
          caption="Datum"
          dataType="date"
          alignment="center"
          calculateCellValue={fetchDate}
          customizeText={renderDate}
          allowEditing={false}
        ></Column>
        <Column
          caption="Vergangene Zeit"
          name="elapsedTime"
          dataType="number"
          alignment="center"
          calculateCellValue={calculateDuration}
          customizeText={(data) => formatMillisAsDuration(data.value)}
          allowEditing={false}
        ></Column>
        <Column
          caption="Beginn"
          dataField={TimeEntryKeys.START_TIME}
          dataType="datetime"
          alignment="center"
          cellRender={renderDateTime}
        >
          <RequiredRule />
        </Column>
        <Column
          dataField={TimeEntryKeys.END_TIME}
          caption="Ende"
          dataType="datetime"
          alignment="center"
          cellRender={renderDateTime}
        >
          <RequiredRule />
        </Column>
        <Column
          dataField={TimeEntryKeys.PROJECT}
          caption="Projekt"
          alignment="center"
        ></Column>
        <Column
          dataField={TimeEntryKeys.NOTES}
          alignment="center"
          caption="Notizen"
        ></Column>
        <Summary>
          <TotalItem
            column="elapsedTime"
            summaryType="sum"
            valueFormat={formatMillisAsDuration}
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

const calculateDuration = (data: Partial<TimeEntry>) => {
  if (data.StartTime == null || data.EndTime == null) {
    return 0;
  }
  const start = DateTime.fromISO(data.StartTime);
  const end = DateTime.fromISO(data.EndTime);
  const elapsedTime = end.diff(start);
  return elapsedTime.toMillis() ?? 0;
};

const renderDateTime = (data: { value: Date }) =>
  DateTime.fromJSDate(data.value).toFormat("HH:mm");

const fetchDate = (data: TimeEntry) => {
  return data.StartTime ? DateTime.fromISO(data.StartTime) : null;
};

/*_______________________________________________________________________________________________
const renderTimeOutput = (data: {
  data: { StartUhrzeit: string; EndUhrzeit: string | null };
}) => {
  const start = DateTime.fromISO(data.data.StartUhrzeit); //Uncaught TypeError: Cannot read properties of undefined (reading 'StartUhrzeit')
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
  //________________________________________________________________________________________________
  */
