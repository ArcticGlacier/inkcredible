import "./agenda.css";
import Divider from "@mui/material/Divider";
import { IconButton, Icon, Fab } from "@mui/material";
import { Add } from "@mui/icons-material";
import Task from "./task";
import React, { useState } from "react";

export default function Agenda(props) {
  const [creatingTask, setCreatingTask] = useState(false);

  function FinishNewTask() {
    setCreatingTask(false);
  }

  return (
    <div className="agendaDiv">
      <h1 id="title">My Agenda</h1>
      <Divider variant="middle" />
      <div className="taskDiv">
        {creatingTask ? (
          <Task isCreating={true} handleNewTask={FinishNewTask}></Task>
        ) : (
          props.tasks.map(function (task) {
            return (
              <Task
                date={task.date}
                icon={task.icon}
                color={task.color}
                description={task.description}
                key={task.id}
                isComplete={task.isComplete}
                isCreating={false}
              ></Task>
            );
          })
        )}
      </div>
      {!creatingTask ? (
        <Fab size="medium" color="primary" aria-label="add">
          <Add onClick={() => setCreatingTask(true)} />
        </Fab>
      ) : (
        <div></div>
      )}
    </div>
  );
}
