import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteTask from "./delete-task-btn";
import { useState } from "react";
import EditTaskForm from "./edit-task-form";

const Task = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "white",
  boxShadow: "2px 2px 10px 10px rgba(0,0,0.0.3)",
});

const SingleTask = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <>
      <Task>
        <Typography variant="body1" gutterBottom>
          {props.text}
        </Typography>
        <div>
          <IconButton
            aria-label="edit"
            size="small"
            color="primary"
            onClick={() => setIsEditing(!isEditing)}
          >
            <EditIcon fontSize="inherit" />
          </IconButton>
          <DeleteTask id={props.id} />
        </div>
      </Task>
      {isEditing && <EditTaskForm id={props.id} />}
    </>
  );
};

export default SingleTask;
