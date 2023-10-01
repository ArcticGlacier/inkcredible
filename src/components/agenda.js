import "./agenda.css";
import Divider from "@mui/material/Divider";
import { IconButton, Icon } from "@mui/material";
import Task from "./task";
import React, { useState } from "react";

export default function Agenda(tasks) {
  const [creatingState, setCreatingState] = useState(false);

  return (
    <div className="agendaDiv">
      <h1 id="title">My Agenda</h1>
      <Divider variant="middle" />
      {tasks.tasks.map(function (task) {
        return (
          <Task
            date={task.date}
            icon={task.icon}
            color={task.color}
            description={task.description}
            id={task.id}
            isComplete={task.isComplete}
          ></Task>
        );
      })}
      <IconButton id="addTaskButton" sx={{ height: "40px", width: "40px" }}>
        <Icon>add_circle</Icon>
      </IconButton>
    </div>
  );
}
