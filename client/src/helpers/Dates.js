export const DaysAgo = days =>
  days > 0
    ? days + " day" + (Math.abs(days) === 1 ? "" : "s") + " later"
    : days < 0
    ? -days + " day" + (Math.abs(days) === 1 ? "" : "s") + " ago"
    : "today";
