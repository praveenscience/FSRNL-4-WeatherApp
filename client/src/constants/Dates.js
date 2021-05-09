export const WeekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

export const WeatherAppContents = [
  {
    Date: 5
  },
  {
    Date: 6
  },
  {
    Date: 7
  },
  {
    Date: 8
  },
  {
    Date: 9
  },
  {
    Date: 10
  },
  {
    Date: 11
  },
  {
    Date: 12
  },
  {
    Date: 13
  }
];

export const DaysAgo = days =>
  days > 0
    ? days + " day" + (Math.abs(days) === 1 ? "" : "s") + " later"
    : days < 0
    ? -days + " day" + (Math.abs(days) === 1 ? "" : "s") + " ago"
    : "today";
