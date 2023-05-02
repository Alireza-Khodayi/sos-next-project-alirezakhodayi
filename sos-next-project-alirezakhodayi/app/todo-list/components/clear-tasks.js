import React from "react";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import { styled } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { supabase } from "@/utils/supabase";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Clear = styled(LoadingButton)({
  width: "100%",
  marginTop: "30px",
});
const ClearAllTasks = () => {
  const [deleting, setIsDeleting] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const clearTasksHandler = async () => {
    setIsDeleting(true);
    const { data, error } = await supabase.from("todos").delete().neq("id", 0);
    setIsDeleting(false);
    setShowNotif(true);
  };
  const handleCloseNotif = () => {
    setShowNotif(false);
  };
  return (
    <>
      <Clear
        loading={deleting}
        onClick={clearTasksHandler}
        variant="outlined"
        startIcon={<ClearAllIcon />}
      >
        Clear All Tasks
      </Clear>
      <Snackbar
        open={showNotif}
        autoHideDuration={6000}
        onClose={handleCloseNotif}
      >
        <Alert
          onClose={handleCloseNotif}
          severity="info"
          sx={{ width: "100%" }}
        >
          All tasks removed from database...
        </Alert>
      </Snackbar>
    </>
  );
};

export default ClearAllTasks;
