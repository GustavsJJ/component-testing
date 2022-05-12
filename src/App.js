import React, { useState } from "react";
import { Display } from "./views";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { withTranslation } from "react-i18next";

function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = (e) => {
    if (e.target.checked === true) setTheme("dark");
    if (e.target.checked === false) setTheme("light");
    console.log(theme);
  };

  return (
    <div className="App">
      <header className={`App-header ${theme}`}>
        <Display changeTheme={changeTheme} />
      </header>
    </div>
  );
}

export default withTranslation()(App);
