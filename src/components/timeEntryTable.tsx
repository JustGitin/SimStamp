import React from "react";
import "./timeEntryTable.css";

export const TimeEntryTable = () => {
  //funktionen der Tabelle hier
  return (
    <>
      <div className="table-container">
        <div className="timetable">
          <table>
            <thead>
              <tr>
                <th>Vergangene Zeit</th>
                <th>Uhrzeit </th>
                <th>Projekt </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>8h 30min</td>
                <td>12:50 Uhr</td>
                <td>Projekt 2b</td>
              </tr>
              <tr>
                <td>8h 30min</td>
                <td>18:45 Uhr</td>
                <td>Projekt 3</td>
              </tr>
              <tr>
                <td>8h 30min</td>
                <td>18:45 Uhr</td>
                <td>Projekt 3</td>
              </tr>
              <tr>
                <td>8h 30min</td>
                <td>18:45 Uhr</td>
                <td>Projekt 3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
