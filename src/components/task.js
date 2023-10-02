import { TextField } from "@mui/material";
import "./task.css";
import { IconButton, Icon } from "@mui/material";
import ColorSelect from "./colorSelect";
import React, { useState, useEffect } from "react";
import { fontSize } from "@mui/system";

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

  const [color, setColor] = useState(props.color);
  const [description, setInputValue] = useState("");

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
            {!props.isCreating ? (
              <p>{props.description}</p>
            ) : (
              <TextField
                placeholder="Enter Task Description"
                size="small"
                variant="standard"
                onChange={(e) => setInputValue(e.target.value)}
              ></TextField>
            )}
          </div>
          {!props.isCreating ? (
            <div className="taskActions">
              <IconButton aria-label="edit">
                <Icon>edit</Icon>
              </IconButton>
              <IconButton
                aria-label="delete"
                onClick={() => props.deleteTask(props.id)}
              >
                <Icon>delete</Icon>
              </IconButton>
            </div>
          ) : (
            <div className="taskActions">
              <IconButton
                aria-label="save"
                onClick={() => props.handleNewTask(true, description, color)}
              >
                <Icon>bookmark</Icon>
              </IconButton>
              <IconButton
                aria-label="discard"
                onClick={() => props.handleNewTask(false, description, color)}
              >
                <Icon>delete</Icon>
              </IconButton>
            </div>
          )}
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
