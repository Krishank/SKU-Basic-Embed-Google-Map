import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const GKEY = "Add your Key in Iframe";
  //"https://www.google.com/maps/embed/v1/place?q=Bunnings Fairfield, Darebin Road, Fairfield VIC&amp;Add your Key in Iframe"
  return (
    <div className="App">
      <h1>Example of Using Google Map API For Free</h1>
      <iframe
        id="preview"
        allowfullscreen=""
        src="https://www.google.com/maps/embed/v1/place?q=Bunnings Fairfield, Darebin Road, Fairfield VIC&amp;"
      ></iframe>
    </div>
  );
}

export default App;
