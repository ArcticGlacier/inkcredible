import "./agenda.css";
import Divider from "@mui/material/Divider";
import { IconButton, Icon } from "@mui/material";
import Task from "./task";
import React, { useState } from "react";

function DisplayTasks(creatingTask, tasks, date) {
  if (creatingTask) {
    return <Task date={date} isCreating={creatingTask}></Task>;
  } else {
    tasks.tasks.map(function (task) {
      return (
        <Task
          date={task.date}
          icon={task.icon}
          color={task.color}
          description={task.description}
          key={task.id}
          isComplete={task.isComplete}
          isCreating={creatingTask}
        ></Task>
      );
    });
  }
}

export default function Agenda(tasks, date) {
  const [creatingTask, setCreatingTask] = useState(false);

  return (
    <div className="agendaDiv">
      <h1 id="title">My Agenda</h1>
      <Divider variant="middle" />
      <div className="taskDiv"> {DisplayTasks(creatingTask, tasks, date)}</div>
      {!creatingTask ? (
        <IconButton
          id="addTaskButton"
          sx={{ height: "40px", width: "40px" }}
          onClick={() => setCreatingTask(true)}
        >
          <Icon>add_circle</Icon>
        </IconButton>
      ) : (
        <div></div>
      )}
    </div>
  );
}
