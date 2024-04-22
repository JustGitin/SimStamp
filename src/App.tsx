import "devextreme/dist/css/dx.material.blue.light.css";
import deMessages from "devextreme/localization/messages/de.json";
import React, { useEffect } from "react";
import { locale, loadMessages } from "devextreme/localization";
import { Header } from "./components/Header.tsx";
import { Content } from "./components/Content.tsx";
import "./App.css";

function App() {
  useEffect(() => {
    loadMessages(deMessages);
    locale(navigator.language);
  }, []);
  return (
    <React.Fragment>
      <Header />
      <Content />
    </React.Fragment>
  );
}

export default App;
