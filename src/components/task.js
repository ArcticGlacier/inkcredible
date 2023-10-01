import { TextField } from "@mui/material";
import "./task.css";
import { IconButton, Icon } from "@mui/material";
import ColorSelect from "./colorSelect";
import { display } from "@mui/system";

function DisplayTaskActions(isCreating) {
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
        <IconButton aria-label="save">
          <Icon>bookmark</Icon>
        </IconButton>
        <IconButton aria-label="discard">
          <Icon>delete</Icon>
        </IconButton>
      </div>
    );
  }
}

function DisplayColorOptions(isCreating) {
  if (isCreating) {
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

    return (
      <div className="colorPalette">
        {colors.map(function (color) {
          return <ColorSelect color={color}></ColorSelect>;
        })}
      </div>
    );
  }
}

export default function Task(
  date,
  icon,
  color,
  description,
  id,
  isComplete,
  isCreating
) {
  return (
    <div className="creatingTask">
      <div className="completeTask">
        <IconButton
          aria-label="complete"
          sx={{
            width: "50px",
            height: "50px",
          }}
        >
          <Icon>task_alt</Icon>
        </IconButton>
        <div className="taskCard" variant="outlined">
          <div className="taskInfo">
            <TextField
              placeholder="Enter Task Description"
              size="small"
              variant="standard"
            ></TextField>
          </div>
          {DisplayTaskActions(true)}
        </div>
      </div>
      {DisplayColorOptions(true)}
    </div>
  );
}
