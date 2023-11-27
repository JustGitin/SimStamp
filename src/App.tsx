import React from "react";
import Navbar from "./navbar";
import { TimerProps } from "./interface";
import Timer from "./Timer";
import { Minutes, Time } from "./typeDeclaration";

const App: React.FunctionComponent<TimerProps> = () => {
  const addTimer = (timePeriod: { h: Time; min: Minutes }) => {
    //hier kann der bekommt der Timer die timePeriod übergeben und kann damit arbeiten
    console.log("Timer added with time period:", timePeriod);
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="mainContainer">
        <div className="timer-container">
          <Timer
            onClick={(timePeriod: { h: Time; min: Minutes }) =>
              addTimer(timePeriod)
            } //hier wird beim drücken des Buttons die Komponente addTimer mit dem parameter timePeriod aufgerufen
            projectTitle="Timer" //hier muss in zukunft ein Title als props übergeben werden
            description="Füge einen Timer hinzu"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
