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
    Date: 5 + 7
  },
  {
    Date: 6 + 7
  },
  {
    Date: 7 + 7
  },
  {
    Date: 8 + 7
  },
  {
    Date: 9 + 7
  },
  {
    Date: 10 + 7
  },
  {
    Date: 11 + 7
  },
  {
    Date: 12 + 7
  },
  {
    Date: 13 + 7
  }
];

export const DaysAgo = days =>
  days > 0
    ? days + " day" + (Math.abs(days) === 1 ? "" : "s") + " later"
    : days < 0
    ? -days + " day" + (Math.abs(days) === 1 ? "" : "s") + " ago"
    : "today";
