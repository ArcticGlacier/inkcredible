import { DateCalendar } from "@mui/x-date-pickers";
import "./calendar.css";
import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useNavigate } from "react-router-dom";

export default function CalendarComponent() {
  const [date, setDate] = useState(dayjs());

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/DailySpread/:${date}`;
    navigate(path);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <div className="calendarPage">
      <h1>Inkredible</h1>
      <DateCalendar
        className="calendar"
        sx={{
          width: "70vw",
          maxHeight: "100vh",
        }}
        value={date}
        onChange={(dateSelected) => {
            setDate(dateSelected);
            routeChange();
        }
        }
      />
    </div>
    </LocalizationProvider>
  );
}
