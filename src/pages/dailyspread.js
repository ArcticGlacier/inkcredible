import { Link } from "react-router-dom";
import "./dailyspread.css";
import { Icon, IconButton } from "@mui/material";
import {
  ExtractDateFromPath,
  moveDateBackward,
  moveDateForward,
} from "../utils/dateUtils";
import React, { useEffect, useState } from "react";

export default function DailySpread() {
  const [date, setDate] = useState(ExtractDateFromPath());

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
    </div>
  );
}
