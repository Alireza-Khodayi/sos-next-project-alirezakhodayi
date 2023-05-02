import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import DeleteTask from "./delete-task-btn";

const Task = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "white",
  boxShadow: "2px 2px 10px 10px rgba(0,0,0.0.3)",
});
const SingleTask = (props) => {
  return (
    <Task>
      <Typography variant="body1" gutterBottom>
        {props.text}
      </Typography>
      <div>
        <DeleteTask id={props.id} />
      </div>
    </Task>
  );
};

export default SingleTask;
