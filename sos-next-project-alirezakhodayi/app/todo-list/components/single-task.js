import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import DeleteTask from "./delete-task-btn";

const Task = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
const SingleTask = (props) => {
  return (
    <Task>
      <Typography variant="body1" gutterBottom>
        {props.text}
      </Typography>
      <div>
        <DeleteTask />
      </div>
    </Task>
  );
};

export default SingleTask;
