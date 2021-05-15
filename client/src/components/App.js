import Navbar from "./Bootstrap/Navbar";
import { Route } from "react-router-dom";
import List from "./DateList/List";
import { WeatherAppContents } from "../constants/Dates";
import Form from "./MainView/Form/Form";

const App = () => {
  return (
    <div className="App">
      <Navbar className="Header justify-content-center" dark={true}>
        Weather App
      </Navbar>
      <div className="container mt-4">
        <div className="row">
          <div className="col-4">
            <Route
              path={["/:dateId", "/"]}
              render={rp => (
                <List
                  WeatherAppContents={WeatherAppContents}
                  SelectedDay={rp.match.params.dateId}
                />
              )}
            />
          </div>
          <div className="col-8">
            <Route
              path={["/:dateId", "/"]}
              render={rp => (
                <Form
                  SelectedDay={
                    rp.match.params.dateId ? rp.match.params.dateId : -1
                  }
                  history={rp.history}
                  WeatherAppContents={WeatherAppContents}
                />
              )}
            />
            <Route
              exact={true}
              path="/"
              render={rp => (
                <>
                  <p>Hey, please select a date!</p>
                </>
              )}
            />
            <Route
              path="/:dateId"
              render={rp => <p>DateID: {rp.match.params.dateId}</p>}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
