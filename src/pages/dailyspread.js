import { Link } from "react-router-dom";
import "./dailyspread.css";
import { Icon, IconButton } from "@mui/material";
import {
  ExtractDateFromPath,
  moveDateBackward,
  moveDateForward,
  FormatNumericalDate,
} from "../utils/dateUtils";
import React, { useEffect, useState } from "react";
import {
  getInventory,
  getStoreItems,
  getTaskList,
  getEntry,
} from "../backend/database";
import Agenda from "../components/agenda";
import Diary from "../components/diary";

export default function DailySpread() {
  const [date, setDate] = useState(ExtractDateFromPath());
  const [taskList, setTaskList] = useState(
    getTaskList(FormatNumericalDate(date))
  );
  const [starCount, setStarCount] = useState();

  let diaryEntries = [];
  let inventoryItems = [];
  let storeItems = [];

  console.log(taskList);
  console.log(FormatNumericalDate(date));

  function updateTaskList() {
    setTaskList(getTaskList(FormatNumericalDate(date)));
  }

  return (
    <div className="dailySpread">
      <div className="header">
        <IconButton
          onClick={() => {
            setDate(moveDateBackward(date));
          }}
        >
          <Icon sx={{ color: "white", fontSize: "3rem" }}>navigate_before</Icon>
        </IconButton>
        <Link to={"/"} id="date">
          {date.month} {date.day}, {date.year}
        </Link>
        <IconButton
          onClick={() => {
            setDate(moveDateForward(date));
          }}
        >
          <Icon sx={{ color: "white", fontSize: "3rem" }}>navigate_next</Icon>
        </IconButton>
      </div>
      <div className="dailySpreadContent">
        <Agenda tasks={taskList} date={date}></Agenda>
        <Diary></Diary>
      </div>
    </div>
  );
}
