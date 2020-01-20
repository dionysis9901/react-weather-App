import React from "react";
import WeatherApp from "./components/weatherApp";

function App() {
  return (
    <div className="App">
      <header>
        <p className="header__heading">Weather Appliaction</p>
      </header>
      <main>
        <WeatherApp />
      </main>
      <footer>
        <p className="footer__text">Made by Dionysis Koufis With React</p>
      </footer>
    </div>
  );
}

export default App;
