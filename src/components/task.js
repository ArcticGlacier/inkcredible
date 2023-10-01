import { TextField } from "@mui/material";
import "./task.css";
import { IconButton, Icon } from "@mui/material";
import ColorSelect from "./colorSelect";
import React, { useState, useEffect } from "react";

function DisplayTaskActions(isCreating, handleNewTask) {
  if (!isCreating) {
    return (
      <div className="taskActions">
        <IconButton aria-label="edit">
          <Icon>edit</Icon>
        </IconButton>
        <IconButton aria-label="delete">
          <Icon>delete</Icon>
        </IconButton>
      </div>
    );
  } else {
    return (
      <div className="taskActions">
        <IconButton aria-label="save" onClick={() => handleNewTask()}>
          <Icon>bookmark</Icon>
        </IconButton>
        <IconButton aria-label="discard" onClick={() => handleNewTask()}>
          <Icon>delete</Icon>
        </IconButton>
      </div>
    );
  }
}

function DisplayCheckmark(isCreating) {
  if (!isCreating) {
    return (
      <IconButton
        aria-label="complete"
        sx={{
          width: "50px",
          height: "50px",
        }}
      >
        <Icon>task_alt</Icon>
      </IconButton>
    );
  }
}

export default function Task(props) {
  const colors = [
    "#FF006E",
    "#FB5607",
    "#FFCA3A",
    "#8AC926",
    "#3A86FF",
    "#8338EC",
    "#F8C8DC",
    "#FAC898",
    "#F2E2BA",
    "#BAF2BB",
    "#BAD7F2",
    "#e7d1ff",
  ];

  const [color, setColor] = useState("#BAD7F2");

  let cardStyle = { backgroundColor: color };

  function handleColorChange(hexCode) {
    setColor(hexCode);
  }

  return (
    <div className="creatingTask">
      <div className="completeTask">
        {DisplayCheckmark(props.isCreating)}

        <div className="taskCard" style={cardStyle}>
          <div className="taskInfo">
            <TextField
              placeholder="Enter Task Description"
              size="small"
              variant="standard"
            ></TextField>
          </div>
          {DisplayTaskActions(props.isCreating, props.handleNewTask)}
        </div>
      </div>
      {props.isCreating ? (
        <div className="colorPalette">
          {colors.map(function (color) {
            return (
              <ColorSelect
                color={color}
                colorSelected={handleColorChange}
              ></ColorSelect>
            );
          })}
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
