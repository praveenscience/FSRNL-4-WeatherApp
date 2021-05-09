import React from "react";
import ListItem from "./_ListItem";

const List = ({ WeatherAppContents, SelectedDay, handleSelectedDayClick }) => {
  return (
    <div className="List list-group">
      {WeatherAppContents.map((cur, key) => (
        <ListItem
          CurDate={cur.Date}
          key={key}
          index={key}
          Selected={+SelectedDay === key}
          handleSelectedDayClick={handleSelectedDayClick}
        />
      ))}
    </div>
  );
};

export default List;
