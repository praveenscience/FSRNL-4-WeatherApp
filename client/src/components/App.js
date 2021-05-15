import React, { Component } from "react";
import Navbar from "./Bootstrap/Navbar";
import List from "./DateList/List";
import { WeatherAppContents } from "../constants/Dates";
import Form from "./MainView/Form/Form";

class App extends Component {
  state = {
    SelectedDay: -1
  };
  handleSelectedDayChange = e => {
    this.setState({
      SelectedDay: e.target.value
    });
  };
  handleSelectedDayClick = SelectedDay => {
    this.setState({
      SelectedDay
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
                handleSelectedDayClick={this.handleSelectedDayClick}
              />
            </div>
            <div className="col-8">
              <Form
                SelectedDay={this.state.SelectedDay}
                handleSelectedDayChange={this.handleSelectedDayChange}
                WeatherAppContents={WeatherAppContents}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
