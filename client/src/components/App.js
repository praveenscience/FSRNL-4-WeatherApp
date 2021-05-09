import React, { Component } from "react";
import Navbar from "./Bootstrap/Navbar";
import List from "./DateList/List";
import { WeatherAppContents } from "../constants/Dates";

class App extends Component {
  state = {
    SelectedDay: -1
  };
  handleSelectedDayChange = e => {
    this.setState({
      SelectedDay: e.target.value
    });
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
            <div className="col-8">
              <form action="">
                <div className="form-group">
                  <label htmlFor="daySelect">Select a Day</label>
                  <select
                    className="form-control"
                    id="daySelect"
                    value={this.state.SelectedDay}
                    onChange={this.handleSelectedDayChange}
                  >
                    <option value="-1" disabled={true}>
                      Please Select...
                    </option>
                    {WeatherAppContents.map((date, key) => (
                      <option value={key} key={key}>
                        May {date.Date}
                      </option>
                    ))}
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
