import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather app</h1>
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/negar-matin-b7a38a261/"
            target="_blank"
            rel="noreferrer"
          >
            Negar Matin
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/negaramatin/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-soureced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
