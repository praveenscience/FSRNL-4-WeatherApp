import React from "react";
import ListItem from "./_ListItem";

const List = ({ WeatherAppContents, SelectedDay }) => {
  return (
    <div className="List list-group">
      {WeatherAppContents.map((cur, key) => (
        <ListItem
          CurDate={cur.Date}
          key={key}
          Selected={+SelectedDay === key}
        />
      ))}
    </div>
  );
};

export default List;
