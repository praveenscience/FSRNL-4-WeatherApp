import Navbar from "./Bootstrap/Navbar";
import List from "./DateList/List";
import { WeatherAppContents } from "../constants/Dates";
import Form from "./MainView/Form/Form";

const App = () => {
  const SelectedDay = -1;
  const handleSelectedDayChange = e => handleSelectedDayClick(e.target.value);
  const handleSelectedDayClick = SelectedDay => {
    // Do something with Selected Day.
  };
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
              SelectedDay={SelectedDay}
              handleSelectedDayClick={handleSelectedDayClick}
            />
          </div>
          <div className="col-8">
            <Form
              SelectedDay={SelectedDay}
              handleSelectedDayChange={handleSelectedDayChange}
              WeatherAppContents={WeatherAppContents}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
