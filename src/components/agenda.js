import "./agenda.css";
import Divider from "@mui/material/Divider";
import { Fab } from "@mui/material";
import { Add } from "@mui/icons-material";
import Task from "./task";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { addTask, getTaskList } from "../backend/database";
import { FormatNumericalDate } from "../utils/dateUtils";

export default function Agenda(props) {
  const [creatingTask, setCreatingTask] = useState(false);
  const [taskList, setTaskList] = useState(props.tasks);

  function FinishNewTask(saveTask, description, color) {
    console.log(description, color);
    if (saveTask) {
      let task = {
        date: FormatNumericalDate(props.date),
        description: description,
        color: color,
        isComplete: false,
        id: uuid(),
      };
      addTask(task);
    }
    setCreatingTask(false);
  }

  useEffect(() => {
    setTaskList(getTaskList(FormatNumericalDate(props.date)));
  }, [creatingTask]);

  return (
    <div className="agendaDiv">
      <h1 id="title">My Agenda</h1>
      <Divider variant="middle" />
      <div className="taskDiv">
        {creatingTask ? (
          <Task isCreating={true} handleNewTask={FinishNewTask}></Task>
        ) : (
          taskList.map(function (task) {
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
