import React, { Component } from "react";
import Navbar from "./Bootstrap/Navbar";
import List from "./DateList/List";
import { WeatherAppContents } from "../constants/Dates";

class App extends Component {
  state = {
    SelectedDay: null
  };
  render() {
    return (
      <div className="App">
        <Navbar className="Header justify-content-center" dark={true}>
          Weather App
        </Navbar>
        <div className="container mt-4">
          <div className="row">
            <div className="col-4">
              <List
                WeatherAppContents={WeatherAppContents}
                SelectedDay={this.state.SelectedDay}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
