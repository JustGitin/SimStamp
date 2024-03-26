import 'devextreme/dist/css/dx.light.css';
import React from "react";
import { Header } from "./components/header.tsx";
import { Content } from "./components/content.tsx";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Content />
    </React.Fragment>
  );
}

export default App;

//nächtste Idee, ich brauche eine ID für jeden Timer und muss überprüfen ob bereits ein timer für das gewünschte projekt vorhanden ist. Wenn ja dann muss eine Fehlermeldung beim neu erstellen des Timers ausgegeben werden und auf den bereits vorhandenen Timer verwiesen werden. Wenn er jedoch nicht vorhanden ist, soll ein Neuer Timer erstellt werden der mit dem Projekt verknüpft ist( Die neu generierte ID könnte einfach die ProjektID sein)

// onClick={(timePeriod: { h: Hours; min: Minutes }) =>
//               //addTimer(timePeriod)
//             } //hier wird beim drücken des Buttons die Komponente addTimer mit dem parameter timePeriod aufgerufen
//             projectTitle="Timer" //hier muss in zukunft ein Title als props übergeben werden
//             description="Füge einen Timer hinzu"
