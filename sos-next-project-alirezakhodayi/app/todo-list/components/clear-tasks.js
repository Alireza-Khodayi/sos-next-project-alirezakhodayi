import ClearAllIcon from "@mui/icons-material/ClearAll";
import { styled } from "@mui/material";
import Button from "@mui/material/Button";

const Clear = styled(Button)({
  width: "100%",
  marginTop: "30px",
});
const ClearAllTasks = () => {
  return (
    <Clear variant="outlined" startIcon={<ClearAllIcon />}>
      Clear All Tasks
    </Clear>
  );
};

export default ClearAllTasks;
