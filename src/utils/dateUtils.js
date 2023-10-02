import dayjs from "dayjs";
import { Link, useLocation } from "react-router-dom";

// Uses current path to find the date which is passed in as a query parameter
const ExtractDateFromPath = () => {
  let path = useLocation().pathname.split("/");
  let dateTime = path[2];
  let date = dateTime.slice(0, 10);

  return FormatDate(date);
};

// Formats a string that is in YYYY/MM/DD into a date object
const FormatDate = (date) => {
  let monthIndex = date.slice(5, 7);
  let monthString = ConvertToMonth(monthIndex, true);

  return {
    year: date.slice(0, 4),
    month: monthString,
    day: date.slice(8),
  };
};

export const FormatNumericalDate = (date) => {
  return `${date.year}-${ConvertToMonth(date.month, false)}-${date.day}`;
};

// Takes in a number representing a month and converts to string
const ConvertToMonth = (month, getString) => {
  const months = {
    January: "01",
    February: "02",
    March: "03",
    April: "04",
    May: "05",
    June: "06",
    July: "07",
    August: "08",
    September: "09",
    October: "10",
    November: "11",
    December: "12",
  };

  if (getString) {
    let monthkeys = Object.keys(months);
    return monthkeys[month - 1];
  } else {
    return months[month];
  }
};

// Finds the next day. CurrentDate is an object with three properties
const moveDateForward = (currentDate) => {
  let monthIndex = ConvertToMonth(currentDate.month, false);

  let date = dayjs(`${currentDate.year}-${monthIndex}-${currentDate.day}`)
    .add(1, "day")
    .toISOString()
    .slice(0, 10);

  return FormatDate(date);
};

// Finds the previous day. CurrentDate is an object with three properties
const moveDateBackward = (currentDate) => {
  let monthIndex = ConvertToMonth(currentDate.month, false);

  let date = dayjs(`${currentDate.year}-${monthIndex}-${currentDate.day}`)
    .subtract(1, "day")
    .toISOString()
    .slice(0, 10);
  return FormatDate(date);
};

export {
  moveDateBackward,
  moveDateForward,
  ExtractDateFromPath,
  ConvertToMonth,
};
