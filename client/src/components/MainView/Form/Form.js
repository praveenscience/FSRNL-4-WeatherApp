import React from "react";

const Form = ({ SelectedDay, WeatherAppContents, history }) => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="daySelect">Select a Day</label>
        <select
          className="form-control"
          id="daySelect"
          value={SelectedDay}
          onChange={e => {
            history.push("/" + e.target.value);
          }}
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
  );
};

export default Form;
