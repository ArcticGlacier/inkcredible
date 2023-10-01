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
  return {
    year: date.slice(0, 4),
    month: date.slice(5, 7),
    day: date.slice(8),
  };
};

// Takes in a number representing a month and converts to string
const ConvertToMonth = (monthNum) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[monthNum - 1];
};

// Finds the next day. CurrentDate is an object with three properties
const moveDateForward = (currentDate) => {
  let date = dayjs(
    `${currentDate.year}-${currentDate.month}-${currentDate.day}`
  ).add(1, "day");
  console.log(date.toISOString());
};

// Finds the previous day. CurrentDate is an object with three properties
const moveDateBackward = (currentDate) => {
  let date = dayjs(
    `${currentDate.year}-${currentDate.month}-${currentDate.day}`
  ).subtract(1, "day");
  console.log(date.toISOString());
};

export {
  moveDateBackward,
  moveDateForward,
  ExtractDateFromPath,
  ConvertToMonth,
};
