import React from "react";
import { Link } from "react-router-dom";
import { DaysAgo, WeekDays } from "../../constants/Dates";

const ListItem = ({ CurDate, Selected, index }) => {
  const today = new Date().getDate();
  return (
    <Link
      to={"/" + index}
      className={
        "ListItem list-group-item list-group-item-action" +
        (CurDate === today ? " list-group-item-success" : "") +
        (Selected ? " active" : "")
      }
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">May {CurDate}</h5>
        <small>{DaysAgo(CurDate - today)}</small>
      </div>
      <p className="mb-1">
        {
          WeekDays[
            (WeekDays.length * 5 + (new Date().getDay() + CurDate - today)) %
              WeekDays.length
          ]
        }
      </p>
      <small>And some small print.</small>
    </Link>
  );
};

export default ListItem;
