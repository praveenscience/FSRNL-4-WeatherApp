import React from "react";
import Navbar from "./Bootstrap/Navbar";
import List from "./DateList/List";
import { WeatherAppContents } from "../constants/Dates";

const App = () => {
  return (
    <div className="App">
      <Navbar className="Header justify-content-center" dark={true}>
        Weather App
      </Navbar>
      <div className="container mt-4">
        <div className="row">
          <div className="col-4">
            <List WeatherAppContents={WeatherAppContents} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
