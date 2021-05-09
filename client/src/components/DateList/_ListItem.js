import React from "react";
import { DaysAgo } from "../../constants/Dates";

const ListItem = ({ CurDate }) => {
  const today = new Date().getDate();
  return (
    <a
      href="#"
      className={
        "list-group-item list-group-item-action" +
        (CurDate === today ? " active" : "")
      }
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">May {CurDate}</h5>
        <small>{DaysAgo(CurDate - today)}</small>
      </div>
      <p className="mb-1">Hi</p>
      <small>And some small print.</small>
    </a>
  );
};

export default ListItem;
