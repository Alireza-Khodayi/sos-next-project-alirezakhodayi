import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import LoadingButton from "@mui/lab/LoadingButton";
import { supabase } from "@/utils/supabase";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const DeleteTask = (props) => {
  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("todos")
      .delete()
      .eq("id", props.id);
    console.log(data, error);
    setLoading(false);
    setDeleted(true);
  };
  const handleCloseNotif = () => {
    setDeleted(false);
  };
  return (
    <>
      <LoadingButton
        loading={loading}
        aria-label="delete"
        size="large"
        onClick={handleDelete}
      >
        <DeleteIcon fontSize="inherit" />
      </LoadingButton>
      <Snackbar
        open={deleted}
        autoHideDuration={6000}
        onClose={handleCloseNotif}
      >
        <Alert
          onClose={handleCloseNotif}
          severity="info"
          sx={{ width: "100%" }}
        >
          Task Removed From List...
        </Alert>
      </Snackbar>
    </>
  );
};

export default DeleteTask;
