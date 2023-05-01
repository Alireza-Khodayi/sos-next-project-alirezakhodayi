import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
const DeleteTask = () => {
  return (
    <IconButton aria-label="delete" size="large">
      <DeleteIcon fontSize="inherit" />
    </IconButton>
  );
};

export default DeleteTask;
