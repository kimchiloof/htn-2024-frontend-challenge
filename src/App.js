import './App.css';
import Home from "./pages/home/home";
import React from "react";

export default function App() {
  return (
      <div className="App">
          <header className={"App-header"}>
              <br/>
              <h1>Hackathon Global Inc.™</h1>
              <br/>
          </header>

          <h2 className={"padded"}>Events</h2>

          <Home/>

      </div>
  );
}
