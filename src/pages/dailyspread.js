import { Link } from "react-router-dom";
import "./dailyspread.css";
import { Icon, IconButton } from "@mui/material";
import {
  ExtractDateFromPath,
  ConvertToMonth,
  moveDateBackward,
  moveDateForward,
} from "../utils/dateUtils";

export default function DailySpread() {
  let currentDate = ExtractDateFromPath();
  let monthString = ConvertToMonth(currentDate.month);

  return (
    <div className="dailySpread">
      <div className="header">
        <IconButton
          onClick={() => {
            moveDateBackward(currentDate);
          }}
        >
          <Icon sx={{ color: "white", fontSize: "3rem" }}>navigate_before</Icon>
        </IconButton>
        <Link to={"/"} id="date">
          {monthString} {currentDate.day}, {currentDate.year}
        </Link>
        <IconButton
          onClick={() => {
            moveDateForward(currentDate);
          }}
        >
          <Icon sx={{ color: "white", fontSize: "3rem" }}>navigate_next</Icon>
        </IconButton>
      </div>
    </div>
  );
}
